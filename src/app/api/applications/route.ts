import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY || "re_1234567890");

const tmpDir = os.tmpdir();
const appsTmpPath = path.join(tmpDir, "bytesool_applications.json");
const appsLocalPath = path.join(process.cwd(), "src", "lib", "applications.json");

async function getApplicationsList(): Promise<any[]> {
  try {
    const data = await fs.readFile(appsTmpPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    try {
      const data = await fs.readFile(appsLocalPath, "utf8");
      try {
        await fs.writeFile(appsTmpPath, data, "utf8");
      } catch (writeErr) {
        console.warn("Failed to seed temporary apps file:", writeErr);
      }
      return JSON.parse(data);
    } catch (readLocalErr) {
      return [];
    }
  }
}

async function saveApplicationsList(apps: any[]): Promise<boolean> {
  const dataStr = JSON.stringify(apps, null, 2);
  let tempSuccess = false;
  
  try {
    await fs.writeFile(appsTmpPath, dataStr, "utf8");
    tempSuccess = true;
  } catch (err) {
    console.error("Failed to write applications to temp directory:", err);
  }
  
  try {
    await fs.writeFile(appsLocalPath, dataStr, "utf8");
  } catch (err) {
    // Silent fail in serverless
  }
  
  return tempSuccess;
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
        const prevStatus = updatedApps[idx].status;
        updatedApps[idx] = { ...updatedApps[idx], status };

        if (status === "Approved" && prevStatus !== "Approved") {
          const applicant = updatedApps[idx];
          try {
            await resend.emails.send({
              from: "Bytesool Careers <info@bytesool.com>",
              to: [applicant.email],
              subject: "Congratulations! You've been selected at Bytesool",
              html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 12px;">
                  <h2 style="color: #6366f1;">Congratulations ${applicant.name}!</h2>
                  <p>We are thrilled to inform you that you have been <strong>Approved</strong> and selected for the <strong>${applicant.positionAppliedFor}</strong> position at Bytesool!</p>
                  <p>Our team was very impressed with your background and experience, and we believe you will be a fantastic addition to our company.</p>
                  <p>Our HR department will be in touch shortly with your official offer letter and next steps regarding onboarding.</p>
                  <br/>
                  <p>Welcome to the team!</p>
                  <p>Best regards,</p>
                  <p><strong>Bytesool Recruitment Team</strong></p>
                </div>
              `
            });
          } catch (emailErr) {
            console.error("Failed to send congratulation email", emailErr);
          }
        }
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
