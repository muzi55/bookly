import React from "react";

interface ISearchParams {
	searchParams: {
		q?: string;
	};
}

export default async function Page({ searchParams }: ISearchParams) {
	// const path = useSearchParams().get("q");

	const queryString = searchParams.q;
	console.log(queryString);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${queryString}`,
		{ cache: "force-cache" },
	);
	const data = await res.json();
	console.log(data);
	return <div>'search' </div>;
}
