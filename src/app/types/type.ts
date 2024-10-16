export interface ITextInputProps {
	placeholder: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	focused: boolean;
	activated: boolean;
}
