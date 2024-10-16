"use client";
import React, { useState } from "react";
import TextField from "../components/search/textfield/TextField";



export default function Page() {
	const [inputValue, setInputValue] = useState<string>("");
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};
	const resetInputValue = ()=>{
		setInputValue("");
	}
	return (
		<div className="px-3 py-2">
			<TextField
				placeholder="text place holder"
				value={inputValue}
				onChange={handleOnChange}
				onClick={resetInputValue}
			/>
		</div>
	);
}
