import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import os from "os";

export const dynamic = "force-dynamic";

const tmpDir = os.tmpdir();
const subsTmpPath = path.join(tmpDir, "bytesool_subscriptions.json");
const subsLocalPath = path.join(process.cwd(), "src", "lib", "subscriptions.json");

// Helper to retrieve subscriptions list
async function getSubscriptionsList(): Promise<any[]> {
  try {
    const data = await fs.readFile(subsTmpPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    try {
      const data = await fs.readFile(subsLocalPath, "utf8");
      try {
        await fs.writeFile(subsTmpPath, data, "utf8");
      } catch (writeErr) {
        console.warn("Failed to seed temporary subscriptions file:", writeErr);
      }
      return JSON.parse(data);
    } catch (readLocalErr) {
      return [];
    }
  }
}

// Helper to save subscriptions list
async function saveSubscriptionsList(subs: any[]): Promise<boolean> {
  const dataStr = JSON.stringify(subs, null, 2);
  let tempSuccess = false;
  
  try {
    await fs.writeFile(subsTmpPath, dataStr, "utf8");
    tempSuccess = true;
  } catch (err) {
    console.error("Failed to write subscriptions to temp directory:", err);
  }
  
  try {
    await fs.writeFile(subsLocalPath, dataStr, "utf8");
  } catch (err) {
    // Silent fail in serverless
  }
  
  return tempSuccess;
}

// Handle fetching all subscribers
export async function GET() {
  try {
    const subs = await getSubscriptionsList();
    // Sort by subscription date descending
    subs.sort((a, b) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime());
    return NextResponse.json(subs, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to load subscriptions" }, { status: 500 });
  }
}

// Handle adding or deleting a subscription
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, action, id } = body;

    const currentSubs = await getSubscriptionsList();

    // If deleting a subscription
    if (action === "delete") {
      const targetId = id || email;
      if (!targetId) {
        return NextResponse.json({ error: "Missing subscription identifier" }, { status: 400 });
      }
      const updatedSubs = currentSubs.filter(sub => sub.id !== targetId && sub.email !== targetId);
      const success = await saveSubscriptionsList(updatedSubs);
      return NextResponse.json({ success, message: "Subscription deleted successfully" }, { status: 200 });
    }

    // Normal subscribe action
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    // Deduplicate
    const normalizedEmail = email.toLowerCase().trim();
    const alreadySubscribed = currentSubs.some(
      (sub: any) => sub.email.toLowerCase().trim() === normalizedEmail
    );

    if (alreadySubscribed) {
      return NextResponse.json(
        { error: "This email is already subscribed!" },
        { status: 400 }
      );
    }

    // Save subscription
    const timestamp = new Date().toISOString();
    const newSubscription = {
      id: `sub_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      email: normalizedEmail,
      subscribedAt: timestamp,
    };

    currentSubs.push(newSubscription);
    const success = await saveSubscriptionsList(currentSubs);

    return NextResponse.json(
      { success, message: "Subscribed successfully! Thank you." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Subscription endpoint issue:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
