import React from "react";

import BookDetail from "@/app/components/books/BookDetail";
import type { BookData } from "@/app/types/type";

export default async function Page() {
	const id = 3;

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`,
	);
	const data: BookData = await res.json();

	return (
		<div className="mt-6">
			<BookDetail {...data} />
		</div>
	);
}
