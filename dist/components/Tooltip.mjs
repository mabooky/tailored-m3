
import { t as cn } from "../cn-I--53mi7.mjs";
import { Container } from "./Container.mjs";
import { jsx } from "react/jsx-runtime";

//#region src/components/Tooltip.tsx
function Tooltip({ ref, className, variant = "plain", children, ...props }) {
	return /* @__PURE__ */ jsx(Container, {
		ref,
		className: cn({
			plain: `w-fit h-[24px] px-[8px] bg-inverse-surface rounded-xs typescale-label-large text-inverse-on-surface`,
			rich: `bg-surface-container rounded-md`
		}[variant], className),
		...props,
		children
	});
}

//#endregion
export { Tooltip };