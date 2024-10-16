import Image from "next/image";
import React from "react";

import type { BookData } from "@/app/types/type";

function BookDetail({ coverImgUrl, title, description }: BookData) {
	return (
		<>
			<div className="bg-red-300">
				<Image
					src={coverImgUrl}
					alt={`${title}의 표지`}
					width={310}
					height={394}
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="text-h3 font-bold mt-4">{title}</h1>
				<p className="text-subBody">{description}</p>
			</div>
		</>
	);
}

export default BookDetail;
