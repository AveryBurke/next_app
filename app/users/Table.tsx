import React from "react";
import Link from 'next/link'
import { sort } from "fast-sort";
interface User {
	id: number;
	name: string;
	sername: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
}
interface Props {
	sortOrder: "name" | "email";
}
const Table: React.FunctionComponent<Props> = async ({ sortOrder }) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users/");
	let users: User[] = await res.json();
	users = sort(users).asc(sortOrder ? user => user[sortOrder] : user => user.name);
	return (
		<table className="table-auto rounded-md border-solid border-2 border-dun">
			<thead>
				<tr>
					<th>
						<Link href="/users?sortOrder=name">name</Link>
					</th>
					<th>
						<Link href="/users?sortOrder=email">email</Link>
					</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id} className="even:bg-ndigo-dye even:text-platinum odd:bg-cambridge-blue p-3">
						<td key={user.id + "_name"}>{user.name}</td>
						<td key={user.id + "_email"}>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
