"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { stat } from "fs/promises";

const LoginMenu = () => {
	const { status, data: session } = useSession();
	return (
		<div className="flex justify-between space-x-3">
			{status === "unauthenticated" && (
				<>
					<a
						href="#"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white  hover:border-transparent hover:text-cambridge-blue-500 duration-200 hover:bg-white mt-4 lg:mt-0">
						Sign Up
					</a>
					<a
						href="/api/auth/signin"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-cambridge-blue-500 duration-200 hover:bg-white mt-4 lg:mt-0">
						Login
					</a>
				</>
			)}
			{status === "authenticated" && (
				<>
					<div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-cambridge-blue-500 duration-200 hover:bg-white mt-4 lg:mt-0">
						Hi {session.user?.name}!
					</div>
					<a
						href="/api/auth/signout"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-cambridge-blue-500 duration-200 hover:bg-white mt-4 lg:mt-0">
						Logout
					</a>
				</>
			)}
		</div>
	);
};

export default LoginMenu;
