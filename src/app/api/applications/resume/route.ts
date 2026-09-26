import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import os from "os";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename");

    if (!filename) {
      return new Response("Missing resume filename parameter", { status: 400 });
    }

    // Safety checks against path traversal (only allow names starting with 'resume_')
    if (!filename.startsWith("resume_") || filename.includes("/") || filename.includes("..") || filename.includes("\\")) {
      return new Response("Permission denied or invalid parameter values", { status: 403 });
    }

    const tmpDir = os.tmpdir();
    const fileTmpPath = path.join(tmpDir, "bytesool_resumes", filename);
    const fileLocalPath = path.join(process.cwd(), "src", "lib", "resumes", filename);

    let fileBytesBuffer: Buffer;
    try {
      fileBytesBuffer = await fs.readFile(fileTmpPath);
    } catch {
      try {
        fileBytesBuffer = await fs.readFile(fileLocalPath);
      } catch (err) {
        return new Response("Resume file was not found inside the local directory storage.", { status: 404 });
      }
    }

    // Attempt to lookup original filename from logs
    let originalName = filename;
    try {
      const appsTmpPath = path.join(tmpDir, "bytesool_applications.json");
      const appsLocalPath = path.join(process.cwd(), "src", "lib", "applications.json");
      
      let appsData: string;
      try {
        appsData = await fs.readFile(appsTmpPath, "utf8");
      } catch {
        appsData = await fs.readFile(appsLocalPath, "utf8");
      }
      
      const apps = JSON.parse(appsData);
      const matchedApp = apps.find((app: any) => app.resumeFilename === filename);
      if (matchedApp && matchedApp.resumeOriginalName) {
        originalName = matchedApp.resumeOriginalName;
      }
    } catch (lookupErr) {
      console.warn("Skip file original name lookup fallback:", lookupErr);
    }

    // Set download headers properly to execute attachments
    const responseHeaders = new Headers();
    // Use fallback Content-Type
    const ext = originalName.split(".").pop()?.toLowerCase();
    const contentType = ext === "pdf" 
      ? "application/pdf" 
      : ext === "docx"
      ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      : ext === "doc"
      ? "application/msword"
      : "application/octet-stream";

    responseHeaders.set("Content-Type", contentType);
    responseHeaders.set("Content-Disposition", `attachment; filename="${encodeURIComponent(originalName)}"`);

    return new Response(new Uint8Array(fileBytesBuffer), {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error: any) {
    console.error("Failed to download resume:", error);
    return new Response("Internal server error downloading candidate files", { status: 500 });
  }
}
