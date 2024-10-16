import BookSection from "./components/books/BookSection";
import type { BookData } from "./types/type";

export default async function Home() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
		{
			next: {
				revalidate: 3,
			},
		},
	);
	const data: BookData[] = await res.json();

	const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {
		cache: "force-cache",
	});
	const data2: BookData[] = await res2.json();

	return (
		<>
			<div className="flex flex-col gap-4">
				<BookSection title="추천하는 책 목록" books={data} />

				<BookSection title="모든 책 목록" books={data2} />
			</div>
			{/* <h2>추천하는 책 목록</h2> */}
			{/* <BookViewer books={data} /> */}
		</>
	);
}
