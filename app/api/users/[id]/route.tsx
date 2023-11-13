import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "../../../../prisma/client";
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	const user = await prisma.user.findUnique({
		where: { id: params.id },
	});
	if (user) return NextResponse.json(user);
	return NextResponse.json({ error: "user not found" }, { status: 404 });
}
export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
	/* check if there is already an account with this email */
	const user = await prisma.user.findUnique({
		where: { email: body.email },
	});
	if (user) return NextResponse.json({ error: "there is already an account with this email address" }, { status: 400 });
	const newUser = await prisma.user.create({
		data: {
			email: body.email,
			name: body.name,
		},
	});
	return NextResponse.json(newUser, { status: 201 });
}
