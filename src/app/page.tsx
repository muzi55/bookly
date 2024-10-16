import Image from "next/image";

import type { BookData } from "./types/type";

export default async function Home() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
	);
	const data: BookData[] = await res.json();

	console.log(data);
	return (
		<>
			<h2>추천하는 책 목록</h2>
			<ul className="flex flex-col gap-5">
				{data.map(book => {
					return (
						<li className="flex gap-3.5" key={book.id}>
							<div className="bg-red-300 min-w-20 max-h-[109px]">
								<Image
									src={book.coverImgUrl}
									width={80}
									height={109}
									alt={`${book.title}의 표지 이미지`}
								/>
							</div>
							<div className="flex flex-col">
								<h3 className="text-body font-bold line-clamp-2 mb-2">
									{book.title}
								</h3>
								<p className="text-subBody line-clamp-3">{book.description}</p>
								<p className="text-des">{book.author}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}
