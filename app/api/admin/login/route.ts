/** @format */

import { NextResponse } from "next/server";
import { loginAdmin } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    const result = await loginAdmin(username, password);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 401 },
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid Request" },
      { status: 400 },
    );
  }
}
