import React, { useState } from "react";

import TextField from "./textfield/TextField";

export default function SearchBar() {
	const [inputValue, setInputValue] = useState<string>("");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};
	const resetInputValue = () => {
		setInputValue("");
	};
	return (
		<form>
			<TextField
				placeholder="검색어를 입력하세요"
				value={inputValue}
				onChange={handleOnChange}
				onClick={resetInputValue}
			/>
		</form>
	);
}
