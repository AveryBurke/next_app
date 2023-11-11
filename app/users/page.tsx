
import React from "react";
import Table from './Table'
interface Props {
	searchParams: {
		sortOrder: "name" | "email";
	};
}


const users: React.FunctionComponent<Props> = async ({ searchParams: { sortOrder } }) => {
	return (
		<Table {...{sortOrder}}/>
	);
};

export default users;
