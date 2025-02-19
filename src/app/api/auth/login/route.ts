import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma.client";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Cari user berdasarkan email
    const findUsers = await prisma.user.findUnique({
      where: { email: email },
    });

    // Jika user tidak ditemukan
    if (!findUsers || !findUsers.password) {
      return NextResponse.json(
        {
          message: "Invalid email or password",
          data: null,
        },
        { status: 401 } // 401: Unauthorized
      );
    }

    // Bandingkan password yang dimasukkan dengan hash di database
    const isMatch = await bcrypt.compare(password, findUsers.password);

    if (isMatch) {
      return NextResponse.json(
        {
          message: "Login successful",
          data: findUsers,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Invalid email or password",
          data: null,
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
