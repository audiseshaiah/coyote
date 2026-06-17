import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const position = formData.get("position") as string;
    const resume = formData.get("resume") as File | null;

    if (!name || !email || !position) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, position" },
        { status: 400 }
      );
    }

    if (!resume) {
      return NextResponse.json(
        { message: "Resume file is required" },
        { status: 400 }
      );
    }

    // TODO: Store resume file (e.g., AWS S3, local storage)
    // TODO: Store application data in database
    // TODO: Send notification to HR team
    console.log("📄 Career application:", {
      name,
      email,
      position,
      resumeName: resume.name,
      resumeSize: `${(resume.size / 1024).toFixed(1)} KB`,
    });

    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Your application has been received. Our HR team will review it and contact you.",
    });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
