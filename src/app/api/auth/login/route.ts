import { NextResponse } from "next/server";
import { env } from "~/env";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (password === env.ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("admin_auth", "true", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      return response;
    }

    return NextResponse.json(
      { error: "Incorrect password. Please try again." },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
