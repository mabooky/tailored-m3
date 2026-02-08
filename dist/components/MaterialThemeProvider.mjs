
'use client';

import { jsx } from "react/jsx-runtime";
import { ThemeProvider } from "next-themes";

//#region src/components/MaterialThemeProvider.tsx
function MaterialThemeProvider({ children }) {
	return /* @__PURE__ */ jsx(ThemeProvider, {
		themes: [
			"system",
			"light",
			"light-medium-contrast",
			"light-high-contrast",
			"dark",
			"dark-medium-contrast",
			"dark-high-contrast"
		],
		enableSystem: true,
		defaultTheme: "system",
		disableTransitionOnChange: true,
		children
	});
}

//#endregion
export { MaterialThemeProvider };