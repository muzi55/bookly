"use client";
import React, { useState } from "react";

import TextInput from "./TextInput";

interface ITextFieldProps {
	placeholder: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

type IsFocus = "focus" | "blur";
export default function TextField({
	placeholder,
	value,
	onChange,
}: ITextFieldProps) {
	const [isFocused, setFocused] = useState<boolean>(false);

	const handleFocuses = (type: IsFocus) => {
		setFocused(type === "focus");
	};

	return (
		<div
			className={`bg-gray-gray1 border-gray-gray4 rounded-rounded-2`}
			onFocus={() => handleFocuses("focus")}
			onBlur={() => handleFocuses("blur")}
		>
			<TextInput placeholder={placeholder} value={value} onChange={onChange} />
		</div>
	);
}
