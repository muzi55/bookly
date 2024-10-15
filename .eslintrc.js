module.exports = {
	parser: "@typescript-eslint/parser", // TypeScript 파서 사용
	extends: [
		"next/core-web-vitals",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	plugins: [
		"prettier",
		"react",
		"eslint-plugin-simple-import-sort",
		"unused-imports",
		"@typescript-eslint",
	],
	rules: {
		"no-undef": "off",
		"unused-imports/no-unused-imports": "error",
		"react/no-unescaped-entities": "off",
		"@next/next/no-page-custom-font": "off",
		"react/jsx-first-prop-new-line": "error",
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: "all",
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: "avoid",
			},
		],
		"react/react-in-jsx-scope": "off",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"@typescript-eslint/consistent-type-imports": "error",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
