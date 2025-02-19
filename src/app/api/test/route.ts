import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma.client";

export async function GET(req:NextRequest){
    const findUsers = await prisma.user.findMany()
    return NextResponse.json({
        message:'ok',
        data: findUsers
    },
    {
        status:200
    })
}