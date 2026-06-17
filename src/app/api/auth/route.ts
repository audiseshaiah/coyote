import { NextRequest, NextResponse } from "next/server";

// Demo user accounts for role-based access
const DEMO_USERS = [
  { email: "admin@coyote.com", password: "demo123", name: "Admin User", role: "admin" },
  { email: "staff@coyote.com", password: "demo123", name: "Staff Member", role: "staff" },
  { email: "visitor@coyote.com", password: "demo123", name: "Visitor", role: "visitor" },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = DEMO_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // TODO: Implement real authentication (JWT, sessions, OAuth)
    // TODO: Connect to user database
    // TODO: Implement password hashing (bcrypt)
    console.log("🔐 Login:", { email: user.email, role: user.role });

    return NextResponse.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      // TODO: Return JWT token
      token: "demo-jwt-token-placeholder",
    });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
