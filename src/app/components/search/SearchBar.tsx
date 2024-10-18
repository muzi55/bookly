"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import TextField from "./textfield/TextField";

export default function SearchBar() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const q = searchParams.get("q");

	const [inputValue, setInputValue] = useState<string>("");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const resetInputValue = () => {
		setInputValue("");
	};

	const onSubmit = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key !== "Enter") return;
		if (!inputValue || q === inputValue) return;

		router.push(`/search?q=${inputValue}`);
	};

	useEffect(() => {
		setInputValue(q || "");
	}, [q]);

	return (
		<div onKeyDown={onSubmit}>
			<TextField
				placeholder="검색어를 입력하세요"
				value={inputValue}
				onChange={handleOnChange}
				onClick={resetInputValue}
			/>
		</div>
	);
}
