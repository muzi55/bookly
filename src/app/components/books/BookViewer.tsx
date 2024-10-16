import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { BookData } from "@/app/types/type";

interface BookViewerProps {
	books: BookData[];
}

function BookViewer({ books }: BookViewerProps) {
	return (
		<ul className="flex flex-col gap-5">
			{books.map(book => {
				return (
					<li key={book.id}>
						<Link className="flex gap-3.5  h-[109px]" href={`/book/${book.id}`}>
							<div className="min-w-20">
								<Image
									src={book.coverImgUrl}
									width={80}
									height={109}
									alt={`${book.title}의 표지 이미지`}
									className="min-h-[109px]"
								/>
							</div>
							<div className="flex flex-col justify-between">
								<h3 className="text-body font-bold line-clamp-1 mb-2">
									{book.title}
								</h3>
								<p className="text-subBody line-clamp-3">{book.description}</p>
								<p className="text-des">{book.author}</p>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default BookViewer;
