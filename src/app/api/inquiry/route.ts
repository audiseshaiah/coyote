import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, details } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, service" },
        { status: 400 }
      );
    }

    // TODO: Connect to CRM system for lead capture
    // TODO: Send notification email to service team
    console.log("📋 Service inquiry:", { name, email, service, details: details?.slice(0, 100) });

    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Your service inquiry has been submitted. Our team will contact you shortly.",
    });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
