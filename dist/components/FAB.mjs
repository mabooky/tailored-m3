
import { twMerge } from "tailwind-merge";
import { jsx } from "react/jsx-runtime";

//#region src/components/FAB.tsx
function FAB({ className, variant, children, ...props }) {
	return /* @__PURE__ */ jsx("button", {
		...props,
		className: twMerge("size-[56px] rounded-[20px]", "bg-primary-container text-on-primary-container", "flex justify-center items-center", className),
		children
	});
}

//#endregion
export { FAB };