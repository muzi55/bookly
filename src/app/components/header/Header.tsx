import Link from "next/link";

import HeaderButton from "./HeaderButton";

export default function Header() {
	return (
		<header className="relative h-[44px] px-1.5">
			<HeaderButton />
			<Link
				href="/"
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-h3 font-bold"
			>
				Bookly
			</Link>
		</header>
	);
}
