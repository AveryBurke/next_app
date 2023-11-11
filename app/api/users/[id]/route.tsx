import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
export function GET(request: NextRequest, { params }: { params: { id: number } }) {
	return NextResponse.json("you requested the user with id " + params.id);
}
export async function PATCH(request: NextRequest, { params }: { params: { id: number } }) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
	return NextResponse.json(body);
}
