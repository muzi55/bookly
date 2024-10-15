"use client";

import Link from "next/link";

export default function Header() {
	return (
		<header className="relative h-[44px] px-1.5">
			<Link
				href="/"
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-h3 font-bold"
			>
				Bookly
			</Link>
		</header>
	);
}
