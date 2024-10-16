import React from "react";

import BookDetail from "@/app/components/books/BookDetail";
import type { BookData } from "@/app/types/type";

interface IBookPageProps {
	params: {
		id: string;
	};
}

export default async function Page({ params }: IBookPageProps) {
	const { id } = params;

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`,
		{ cache: "force-cache" },
	);
	const data: BookData = await res.json();

	return (
		<div className="mt-6">
			<BookDetail {...data} />
		</div>
	);
}
