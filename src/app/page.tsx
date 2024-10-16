import BookViewer from "./components/books/BookViewer";
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
			<BookViewer books={data} />
		</>
	);
}
