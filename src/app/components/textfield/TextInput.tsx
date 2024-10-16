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
			className={`block text-body w-full outline-none p-[14px] text-input-text caret-primary`}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
		/>
	);
}
