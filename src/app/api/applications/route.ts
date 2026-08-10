import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const appsFilePath = path.join(process.cwd(), "src", "lib", "applications.json");

let memoryAppsCache: any[] | null = null;

async function getApplicationsList(): Promise<any[]> {
  try {
    const data = await fs.readFile(appsFilePath, "utf8");
    const parsed = JSON.parse(data);
    memoryAppsCache = parsed;
    return parsed;
  } catch (err) {
    return [];
  }
}

async function saveApplicationsList(apps: any[]): Promise<boolean> {
  memoryAppsCache = apps;
  try {
    await fs.writeFile(appsFilePath, JSON.stringify(apps, null, 2), "utf8");
    return true;
  } catch (err) {
    console.warn("Failed to write applications list:", err);
    return false;
  }
}

export async function GET() {
  try {
    const apps = await getApplicationsList();
    return NextResponse.json(apps, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to load applications" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, id, status } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing application ID" }, { status: 400 });
    }

    const currentApps = await getApplicationsList();
    let updatedApps = [...currentApps];

    if (action === "delete") {
      updatedApps = updatedApps.filter((app) => app.id !== id);
    } else if (action === "update_status") {
      const idx = updatedApps.findIndex((app) => app.id === id);
      if (idx > -1) {
        updatedApps[idx] = { ...updatedApps[idx], status };
      } else {
        return NextResponse.json({ error: "Application not found" }, { status: 404 });
      }
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const success = await saveApplicationsList(updatedApps);
    return NextResponse.json({ success, data: updatedApps }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to mutate applications details:", error);
    return NextResponse.json({ error: error.message || "Operation failed" }, { status: 500 });
  }
}
