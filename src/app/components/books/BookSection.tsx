import React from "react";

import type { BookData } from "@/app/types/type";

import BookViewer from "./BookViewer";

interface IBookSectionProps {
	title: string;
	books: BookData[];
}
function BookSection({ title, books }: IBookSectionProps) {
	return (
		<section className="mt-4">
			<h2 className="text-h3 font-bold  mb-3.5">{title}</h2>
			<BookViewer books={books} />
		</section>
	);
}

export default BookSection;
