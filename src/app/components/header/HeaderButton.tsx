"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function HeaderButton() {
	const path = usePathname();

	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	if (path === "/") return null;

	return (
		<button onClick={handleBack} className="w-[44px] h-[44px]">
			<Image
				src={"/icon/ic_back.svg"}
				width={22}
				height={22}
				alt="뒤로가기 아이콘"
			/>
		</button>
	);
}

export default HeaderButton;
