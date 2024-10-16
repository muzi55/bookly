import Image from "next/image";
import React from "react";

interface IconButtonProps {
	src: string;
	alt: string;
	onClick: () => void;
	width: number;
	height: number;
}
export default function IconButton({
	src,
	alt,
	onClick,
	width,
	height,
}: IconButtonProps) {
	return (
		<button className="px-[14px]" onClick={onClick}>
			<Image src={src} alt={alt} width={width} height={height} />
		</button>
	);
}
