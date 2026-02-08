
import { t as cn } from "../cn-I--53mi7.mjs";
import { Container } from "./Container.mjs";
import { IconButton } from "./IconButton.mjs";
import { jsx } from "react/jsx-runtime";

//#region src/components/AppBar.tsx
function AppBarRoot({ ref, className, variant, children, ...props }) {
	return /* @__PURE__ */ jsx(Container, {
		ref,
		className: cn(`flex w-full h-[64px] bg-surface items-center`),
		...props,
		children
	});
}
function AppBarLeadingButton({ ref, className, children, ...props }) {
	return /* @__PURE__ */ jsx(IconButton, {
		ref,
		variant: "standard",
		size: "sm",
		className: cn(`mx-[4px]`, className),
		...props,
		children
	});
}
const AppBar = Object.assign(AppBarRoot, { LeadingButton: AppBarLeadingButton });

//#endregion
export { AppBar };