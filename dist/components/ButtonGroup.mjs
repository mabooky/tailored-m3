
'use client';

import { jsx } from "react/jsx-runtime";
import { createContext } from "react";

//#region src/components/ButtonGroup.tsx
const ButtonGroupContext = createContext(null);
function ButtonGroup({ className, children, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: "",
		...props,
		children
	});
}

//#endregion
export { ButtonGroup, ButtonGroupContext };