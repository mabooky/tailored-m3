
import { t as cn } from "../cn-I--53mi7.mjs";
import { StatefulContainer } from "./StatefulContainer.mjs";
import { jsx } from "react/jsx-runtime";

//#region src/components/IconButton.tsx
function IconButton({ ref, className, size = "sm", shape = "round", width = "default", variant = "filled", selected, disabled = false, children, ...props }) {
	const isToggleButton = typeof selected === "boolean";
	const sizeStyles = {
		xs: `h-var-[32px] rounded-md text-[20px] active:rounded-sm`,
		sm: `h-var-[40px] rounded-md text-[24px] active:rounded-sm`,
		md: `h-var-[56px] rounded-lg text-[24px] active:rounded-md`,
		lg: `h-var-[96px] rounded-xl text-[32px] active:rounded-lg`,
		xl: `h-var-[136px] rounded-xl text-[40px] active:rounded-lg`
	};
	const widthStylesBySize = {
		xs: {
			default: "w-[32px]",
			narrow: "w-[28px]",
			wide: "w-[40px]"
		},
		sm: {
			default: "w-[40px]",
			narrow: "w-[32px]",
			wide: "w-[52px]"
		},
		md: {
			default: "w-[56px]",
			narrow: "w-[48px]",
			wide: "w-[72px]"
		},
		lg: {
			default: "w-[96px]",
			narrow: "w-[64px]",
			wide: "w-[128px]"
		},
		xl: {
			default: "w-[136px]",
			narrow: "w-[104px]",
			wide: "w-[184px]"
		}
	};
	const variantStyles = {
		filled: isToggleButton ? `bg-surface-container text-on-surface-variant selected:bg-primary selected:text-on-primary` : `bg-primary text-on-primary`,
		tonal: isToggleButton ? `bg-secondary-container text-on-secondary-container selected:bg-secondary selected:text-on-secondary` : `bg-secondary-container text-on-secondary-container`,
		outlined: cn(`border`, isToggleButton ? `border-outline-variant text-on-surface-variant selected:bg-inverse-surface selected:text-inverse-on-surface` : `border-outline-variant text-on-surface-variant`),
		standard: isToggleButton ? `text-on-surface-variant selected:text-primary` : `text-on-surface-variant`
	};
	const variantStateLayerColors = {
		filled: isToggleButton && !selected ? `on-surface-variant` : `on-primary`,
		tonal: isToggleButton && selected ? `on-secondary` : `on-secondary-container`,
		outlined: isToggleButton && selected ? `inverse-on-surface` : `on-surface-variant`,
		standard: isToggleButton && selected ? `primary` : `on-surface-variant`
	};
	return /* @__PURE__ */ jsx(StatefulContainer, {
		ref,
		className: cn(`flex justify-center items-center cursor-pointer transition-all duration-100 ease-out`, sizeStyles[size], shape === "round" ? "rounded-full-var" : "", widthStylesBySize[size][width], variantStyles[variant], className),
		stateLayerColor: variantStateLayerColors[variant],
		selected,
		disabled,
		...props,
		children: /* @__PURE__ */ jsx("span", {
			className: "material-symbols-outlined select-none",
			children
		})
	});
}

//#endregion
export { IconButton };