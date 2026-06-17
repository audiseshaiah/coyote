import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, subject, message" },
        { status: 400 }
      );
    }

    // TODO: Connect to email service (e.g., SendGrid, AWS SES, Nodemailer)
    // TODO: Store lead data in database
    console.log("📧 Contact form submission:", { name, email, subject, message: message.slice(0, 100) });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We'll get back to you within 1-2 business days.",
    });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
