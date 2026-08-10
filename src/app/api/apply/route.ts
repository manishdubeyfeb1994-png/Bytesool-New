import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_1234567890");

// Path to applications list and secure resumes directory
const appsFilePath = path.join(process.cwd(), "src", "lib", "applications.json");
const resumesDir = path.join(process.cwd(), "src", "lib", "resumes");

// In-memory fallbacks for serverless environments (if local filesystem write fails)
let memoryAppsCache: any[] | null = null;

// Read applications helper
async function getApplicationsList(): Promise<any[]> {
  if (memoryAppsCache) return memoryAppsCache;
  try {
    const data = await fs.readFile(appsFilePath, "utf8");
    const parsed = JSON.parse(data);
    memoryAppsCache = parsed;
    return parsed;
  } catch (err) {
    // If file doesn't exist, start with empty array
    return [];
  }
}

// Write applications helper
async function saveApplicationsList(apps: any[]): Promise<boolean> {
  memoryAppsCache = apps;
  try {
    await fs.writeFile(appsFilePath, JSON.stringify(apps, null, 2), "utf8");
    return true;
  } catch (err) {
    console.warn("Failed to write applications list to filesystem:", err);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // extract fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const location = formData.get("location") as string;
    const jobTitle = (formData.get("jobTitle") || "") as string;
    const experience = formData.get("experience") as string;
    const relevantExperience = (formData.get("relevantExperience") || "") as string;
    const lastCompany = (formData.get("lastCompany") || "") as string;
    const noticePeriod = (formData.get("noticePeriod") || "") as string;
    const currentCtc = (formData.get("currentCtc") || "") as string;
    const expectedCtc = (formData.get("expectedCtc") || "") as string;
    
    const positionAppliedFor = (formData.get("positionAppliedFor") || "") as string;
    const linkedin = (formData.get("linkedin") || "") as string;
    const portfolio = (formData.get("portfolio") || "") as string;
    const coverLetter = (formData.get("coverLetter") || "") as string;
    const applyEmailDestination = (formData.get("applyEmailDestination") || "careers@bytesool.com") as string;
    const resumeFile = formData.get("resume") as File | null;

    // Server-side required fields check
    if (!name || !email || !phone || !location || !experience || !resumeFile) {
      return NextResponse.json(
        { error: "Required fields are missing (Name, Email, Phone, Location, Experience, Resume)." },
        { status: 400 }
      );
    }

    // 15. Server-side Resume file validations (Formats: PDF/DOC/DOCX, Size: < 10MB)
    const allowedExtensions = ["pdf", "doc", "docx"];
    const fileExt = resumeFile.name.split(".").pop()?.toLowerCase();
    if (!fileExt || !allowedExtensions.includes(fileExt)) {
      return NextResponse.json(
        { error: "Invalid resume format. Only PDF, DOC, and DOCX files are allowed." },
        { status: 400 }
      );
    }

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (resumeFile.size > maxSize) {
      return NextResponse.json(
        { error: "Resume file size exceeds the 10 MB limit." },
        { status: 400 }
      );
    }

    // Generate unique filename to avoid conflict/overwriting
    const timestamp = Date.now();
    const cleanFileName = resumeFile.name.replace(/[^a-zA-Z0-9.]/g, "_");
    const uniqueResumeName = `resume_${timestamp}_${cleanFileName}`;

    // Read file bytes
    const fileBytesBuffer = Buffer.from(await resumeFile.arrayBuffer());

    // Save resume to non-public secure resumes folder
    try {
      await fs.mkdir(resumesDir, { recursive: true });
      await fs.writeFile(path.join(resumesDir, uniqueResumeName), fileBytesBuffer);
    } catch (saveErr) {
      console.warn("Failed to write resume to disk, continuing mock email application:", saveErr);
    }

    // Save application to jobs/applications JSON list
    const currentAppsList = await getApplicationsList();
    const appEntryId = `app_${timestamp}_${Math.floor(Math.random() * 1000)}`;
    const newAppEntry = {
      id: appEntryId,
      name,
      email,
      phone,
      location,
      currentJobTitle: jobTitle || undefined,
      experience,
      relevantExperience: relevantExperience || undefined,
      lastCompany: lastCompany || undefined,
      noticePeriod: noticePeriod || undefined,
      currentCtc: currentCtc || undefined,
      expectedCtc: expectedCtc || undefined,
      linkedin: linkedin || undefined,
      portfolio: portfolio || undefined,
      coverLetter: coverLetter || undefined,
      positionAppliedFor,
      appliedDate: new Date().toISOString().split("T")[0],
      resumeFilename: uniqueResumeName,
      resumeOriginalName: resumeFile.name,
      status: "New" // Initial status as required by step 9
    };

    currentAppsList.push(newAppEntry);
    await saveApplicationsList(currentAppsList);

    // 10. Email Notifications Trigger
    let emailStatus = { adminSent: false, candidateSent: false };

    try {
      // 10.1 Admin Notification (alert recruitment matching style details)
      const adminEmailBody = `
        <h2>New Job Application for ${positionAppliedFor}</h2>
        <hr style="border: 0; height: 1px; background: #e0e0e0; margin: 20px 0;"/>
        <h3>Candidate Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>

        <h3>Professional Summary</h3>
        <p><strong>Current Title:</strong> ${jobTitle || "Fresh / Unspecified"}</p>
        <p><strong>Total Experience:</strong> ${experience} Years</p>
        <p><strong>Relevant Experience:</strong> ${relevantExperience || "N/A"} Years</p>
        <p><strong>Last/Current Company:</strong> ${lastCompany || "N/A"}</p>
        <p><strong>Notice Period:</strong> ${noticePeriod || "N/A"} Days</p>
        <p><strong>Current CTC:</strong> ${currentCtc || "N/A"}</p>
        <p><strong>Expected CTC:</strong> ${expectedCtc || "N/A"}</p>

        <h3>Application Details</h3>
        <p><strong>LinkedIn Profile:</strong> ${linkedin ? `<a href="${linkedin}">${linkedin}</a>` : "Not provided"}</p>
        <p><strong>Portfolio / GitHub:</strong> ${portfolio ? `<a href="${portfolio}">${portfolio}</a>` : "Not provided"}</p>
        <p><strong>Cover Letter:</strong></p>
        <p style="white-space: pre-wrap; font-family: monospace; background: #fbfbfb; padding: 12px; border: 1px solid #eee; border-radius: 8px;">${coverLetter || "No cover letter message provided."}</p>
      `;

      const adminEmailResponse = await resend.emails.send({
        from: "Bytesool Recruitment <info@bytesool.com>",
        to: [applyEmailDestination, "info@bytesool.com"],
        subject: `New Job Application – ${positionAppliedFor} – ${name}`,
        html: adminEmailBody,
        attachments: [
          {
            content: fileBytesBuffer.toString("base64"),
            filename: resumeFile.name,
          }
        ]
      });

      if (!adminEmailResponse.error) {
        emailStatus.adminSent = true;
      } else {
        console.error("Resend error sending admin notification:", adminEmailResponse.error);
      }

      // 10.2 Candidate Confirmation (automated reply thank you)
      const candidateEmailBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 12px;">
          <h2 style="color: #6366f1;">Application Received</h2>
          <p>Dear ${name},</p>
          <p>Thank you for applying to Bytesool for the position of <strong>${positionAppliedFor}</strong>.</p>
          <p>We have successfully received your application. Our recruitment team will review your profile, experience, and certifications. If your background matches our requirements, we will contact you directly with local scheduling details.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Bytesool Recruitment Team</strong></p>
          <hr style="border: 0; border-top: 1px solid #f0f0f0; margin-top: 30px;"/>
          <p style="font-size: 11px; color: #999; text-align: center;">This is an automated confirmation alert regarding your job application.</p>
        </div>
      `;

      const candidateEmailResponse = await resend.emails.send({
        from: "Bytesool Careers <info@bytesool.com>",
        to: [email],
        subject: `Application Received – ${positionAppliedFor} | BYTESOOL`,
        html: candidateEmailBody,
      });

      if (!candidateEmailResponse.error) {
        emailStatus.candidateSent = true;
      } else {
        console.error("Resend error sending candidate receipt confirmation:", candidateEmailResponse.error);
      }

    } catch (emailErr) {
      console.warn("Mail client server triggers bypassed: checks process.env.RESEND_API_KEY", emailErr);
    }

    return NextResponse.json({
      success: true,
      applicationId: appEntryId,
      emailStatus,
      message: "Application submitted successfully."
    }, { status: 200 });

  } catch (error: any) {
    console.error("Critical apply routing issue:", error);
    return NextResponse.json(
      { error: error.message || "Internal application pipeline error." },
      { status: 500 }
    );
  }
}
