import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

    const filePath = path.join(process.cwd(), "src", "lib", "resumes", filename);

    try {
      // Verify file access
      await fs.access(filePath);
    } catch {
      return new Response("Resume file was not found inside the local directory storage.", { status: 404 });
    }

    // Attempt to lookup original filename from logs
    let originalName = filename;
    try {
      const appsFilePath = path.join(process.cwd(), "src", "lib", "applications.json");
      const appsData = await fs.readFile(appsFilePath, "utf8");
      const apps = JSON.parse(appsData);
      const matchedApp = apps.find((app: any) => app.resumeFilename === filename);
      if (matchedApp && matchedApp.resumeOriginalName) {
        originalName = matchedApp.resumeOriginalName;
      }
    } catch (lookupErr) {
      console.warn("Skip file original name lookup fallback:", lookupErr);
    }

    const fileBytesBuffer = await fs.readFile(filePath);

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

    return new Response(fileBytesBuffer, {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error: any) {
    console.error("Failed to download resume:", error);
    return new Response("Internal server error downloading candidate files", { status: 500 });
  }
}
