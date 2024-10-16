"use client";
import React, { useState } from "react";


import TextInput from "./TextInput";
import IconButton from "../../common/IconButton";

interface ITextFieldProps {
	placeholder: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onClick: ()=>void;
}

type IsFocus = "focus" | "blur";
export default function TextField({
	placeholder,
	value,
	onChange,
	onClick,
}: ITextFieldProps) {
	const [isFocused, setFocused] = useState<boolean>(false);

	const borderColor = isFocused
		? "border-primary"
		: !value
			? "border-gray-gray4"
			: "border-gray-gray5";

	const handleFocuses = (type: IsFocus) => {
		setFocused(type === "focus");
	};

	return (
		<div
			className={`flex bg-gray-gray1 border ${borderColor} rounded-rounded-2 transition-03`}
			onFocus={() => handleFocuses("focus")}
			onBlur={() => handleFocuses("blur")}
		>
			<TextInput placeholder={placeholder} value={value} onChange={onChange} />

			{value && (
				<IconButton
					src="/icon/delete.svg"
					alt="입력 삭제"
					width={18}
					height={18}
					onClick={onClick}
				/>
			)}
		</div>
	);
}
