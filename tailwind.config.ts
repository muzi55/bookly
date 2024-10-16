import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#8446ff",
				secondary: "#f3ecff",
				"input-text": "#2c2c2c",
				gray: {
					gray1: "#f4f5f8",
					gray4: "#b5b8c2",
					gray5: "#8c8f98",
					primary: "#383940",
					secondary: "#676975",
				},
			},
			fontSize: {
				h1: [
					"1.875rem",
					{
						fontWeight: "700",
						lineHeight: "1.3",
						letterSpacing: "-0.02em",
					},
				],
				h2: [
					"1.5rem",
					{
						fontWeight: "700",
						lineHeight: "1.5",
						letterSpacing: "-0.02em",
					},
				],
				h3: [
					"1.125rem",
					{
						lineHeight: "1.5",
						letterSpacing: "-0.02em",
					},
				],
				body: [
					"1rem",
					{
						lineHeight: "1.5",
						letterSpacing: "-0.02em",
					},
				],
				subBody: [
					"0.75em",
					{
						lineHeight: "1.5",
						letterSpacing: "-0.02em",
					},
				],
				des: [
					"0.625rem",
					{
						lineHeight: "1.5",
						letterSpacing: "-0.02em",
					},
				],
				"5xs": "0.625rem",
				"4xs": "0.6875rem",
				"3xs": "0.75rem",
				"2xs": "0.8125rem",
				xs: "0.875rem",
				sm: "0.9375rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.5rem",
				"2xl": "1.875rem",
			},
			boxShadow: {
				boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.15)",
			},
			fontFamily: {
				pretendard: ["var(--font-pretendard)"],
			},
			borderRadius: {
				"rounded-1": "0.25rem",
				"rounded-2": "0.5rem",
			},
		},
	},
	plugins: [],
};
export default config;
