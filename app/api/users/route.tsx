import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";


export async function GET(request: NextRequest) {
	//get the user from the db
    const users = await prisma.user.findMany()
	return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    return NextResponse.json({id:1, name: body.name});
}