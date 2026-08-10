import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import os from "os";

export const dynamic = "force-dynamic";

const tmpDir = os.tmpdir();
const jobsTmpPath = path.join(tmpDir, "bytesool_jobs.json");
const jobsLocalPath = path.join(process.cwd(), "src", "lib", "jobs.json");

// Helper to read jobs
async function getJobsList(): Promise<any[]> {
  try {
    const data = await fs.readFile(jobsTmpPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    try {
      const data = await fs.readFile(jobsLocalPath, "utf8");
      try {
        await fs.writeFile(jobsTmpPath, data, "utf8");
      } catch (writeErr) {
        console.warn("Failed to seed temporary jobs file:", writeErr);
      }
      return JSON.parse(data);
    } catch (readLocalErr) {
      console.error("Failed to read local jobs bundle:", readLocalErr);
      return [];
    }
  }
}

// Helper to save jobs
async function saveJobsList(jobs: any[]): Promise<boolean> {
  const dataStr = JSON.stringify(jobs, null, 2);
  let tempSuccess = false;
  
  try {
    await fs.writeFile(jobsTmpPath, dataStr, "utf8");
    tempSuccess = true;
  } catch (err) {
    console.error("Failed to write jobs to temp directory:", err);
  }
  
  try {
    await fs.writeFile(jobsLocalPath, dataStr, "utf8");
  } catch (err) {
    // Silent fail in serverless
  }
  
  return tempSuccess;
}

export async function GET() {
  try {
    const jobs = await getJobsList();
    return NextResponse.json(jobs, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to load jobs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Support either saving state of all jobs, or adding/updating a single job.
    // For general management, in this simple setup, the admin page will send the entire new array
    if (Array.isArray(body)) {
      const success = await saveJobsList(body);
      return NextResponse.json({ success, message: "Jobs list updated successfully." }, { status: 200 });
    }

    // Single job updates
    const currentJobs = await getJobsList();
    const { action, job } = body;

    if (!job || !job.id) {
      return NextResponse.json({ error: "Missing job data or ID" }, { status: 400 });
    }

    let updatedJobs = [...currentJobs];

    if (action === "delete") {
      updatedJobs = updatedJobs.filter((item) => item.id !== job.id);
    } else {
      // Add or Edit
      const existingIdx = updatedJobs.findIndex((item) => item.id === job.id);
      if (existingIdx > -1) {
        updatedJobs[existingIdx] = { ...updatedJobs[existingIdx], ...job };
      } else {
        updatedJobs.push(job);
      }
    }

    const success = await saveJobsList(updatedJobs);
    return NextResponse.json({ success, data: updatedJobs }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to process jobs mutation request:", error);
    return NextResponse.json({ error: error.message || "Operation failed" }, { status: 500 });
  }
}
