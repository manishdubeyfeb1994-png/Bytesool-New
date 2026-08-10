import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// In-memory fallback cache for serverless environments where filesystem is read-only
let memoryJobsCache: any[] | null = null;

const jobsFilePath = path.join(process.cwd(), "src", "lib", "jobs.json");

// Helper to read jobs
async function getJobsList(): Promise<any[]> {
  try {
    const data = await fs.readFile(jobsFilePath, "utf8");
    const parsed = JSON.parse(data);
    memoryJobsCache = parsed;
    return parsed;
  } catch (err) {
    console.error("Error reading jobs file, using backup blank array:", err);
    return [];
  }
}

// Helper to save jobs
async function saveJobsList(jobs: any[]): Promise<boolean> {
  memoryJobsCache = jobs;
  try {
    await fs.writeFile(jobsFilePath, JSON.stringify(jobs, null, 2), "utf8");
    return true;
  } catch (err) {
    console.warn("Failed to write to file system (potentially serverless write restriction):", err);
    return false;
  }
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
