
import { t as cn } from "../cn-I--53mi7.mjs";
import { jsx } from "react/jsx-runtime";

//#region src/components/Container.tsx
function Container({ ref, className, children, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn(`relative`, className),
		...props,
		children
	});
}

//#endregion
export { Container };