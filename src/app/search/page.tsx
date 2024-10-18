import React from "react";

import BookViewer from "../components/books/BookViewer";
import type { BookData } from "../types/type";

interface ISearchParams {
	searchParams: {
		q?: string;
	};
}

export default async function Page({ searchParams }: ISearchParams) {
	const queryString = searchParams.q;
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${queryString}`,
		{ cache: "force-cache" },
	);
	const data: BookData[] = await res.json();
	return (
		<div className="mt-4">
			<BookViewer books={data} />
		</div>
	);
}
