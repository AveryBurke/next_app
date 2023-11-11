import React from "react";

const NavBar = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<svg
					className="h-8 w-8 fill-white"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
					<path d="M256,0C114.844,0,0,114.839,0,256s114.844,256,256,256s256-114.839,256-256S397.156,0,256,0z M356.196,339.496 c9.219,0,16.699,7.475,16.699,16.699c0,9.225-7.48,16.699-16.699,16.699c-27.625,0-50.098-22.473-50.098-50.098V172.504H205.902 v183.692c0,9.225-7.48,16.699-16.699,16.699s-16.699-7.475-16.699-16.699V172.504h-16.699c-9.219,0-16.699-7.475-16.699-16.699 s7.48-16.699,16.699-16.699h200.391c9.219,0,16.699,7.475,16.699,16.699s-7.48,16.699-16.699,16.699h-16.699v150.294 C339.496,332.005,346.988,339.496,356.196,339.496z"></path>
				</svg>
			</div>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
						Docs
					</a>
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
						Examples
					</a>
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
						Blog
					</a>
				</div>
				<div className="flex justify-between w-52">
					<a
						href="#"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
						Sign Up
					</a>
					<a
						href="#"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
						Login
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
