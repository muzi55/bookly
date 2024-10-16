"use client";
import React from "react";

import type { ITextInputProps } from "@/app/types/type";

export default function TextInput({
	placeholder,
	value,
	onChange,
}: ITextInputProps) {
	return (
		<input
			type="text"
			className={`w-full block text-body outline-none p-[14px] text-input-text caret-primary bg-transparent`}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
		/>
	);
}
