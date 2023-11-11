import { NextRequest, NextResponse } from "next/server";


export function GET(request: NextRequest) {
	//get the user from the db
	return NextResponse.json("help!");
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    return NextResponse.json({id:1, name: body.name});
}