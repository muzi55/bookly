"use client";
import React, { useState } from "react";

import TextInput from "../components/textfield/TextInput";

export default function Page() {
	const [state, setState] = useState<string>("");
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState(e.target.value);
	};
	return (
		<div>
			<TextInput
				placeholder="input"
				value={state}
				onChange={onChange}
				focused={true}
				activated={true}
			/>
		</div>
	);
}
