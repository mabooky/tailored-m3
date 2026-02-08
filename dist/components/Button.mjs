
'use client';

import { t as cn } from "../cn-I--53mi7.mjs";
import { StatefulContainer } from "./StatefulContainer.mjs";
import { jsx } from "react/jsx-runtime";

//#region src/components/Button.tsx
function Button({ ref, className, size = "sm", shape = "round", variant = "filled", selected = false, disabled = false, children, ...props }) {
	return /* @__PURE__ */ jsx(StatefulContainer, {
		ref,
		className: cn(`cursor-pointer transition-all duration-100 ease-out`, {
			xs: `h-var-[32px] px-[12px] rounded-md typescale-label-large active:rounded-sm`,
			sm: `h-var-[40px] px-[16px] rounded-md typescale-label-large active:rounded-sm`,
			md: `h-var-[56px] px-[24px] rounded-lg typescale-title-medium active:rounded-md`,
			lg: `h-var-[96px] px-[48px] rounded-xl typescale-headline-small active:rounded-lg`,
			xl: `h-var-[136px] px-[64px] rounded-xl typescale-headline-large active:rounded-lg`
		}[size], shape === "round" ? "rounded-full-var" : "", {
			elevated: `
            bg-surface-container-low text-primary shadow-elevation-1
            selected:bg-primary selected:text-on-primary
        `,
			filled: `
            bg-primary text-on-primary
            selected:bg-primary selected:text-on-primary
        `,
			tonal: `
            bg-secondary-container text-on-secondary-container
            selected:bg-secondary selected:text-on-secondary
        `,
			outlined: `
            border border-outline-variant text-on-surface-variant
            selected:bg-inverse-surface selected:text-inverse-on-surface
        `,
			text: `text-primary`
		}[variant], className),
		stateLayerColor: {
			elevated: "primary",
			filled: "on-primary",
			tonal: "on-secondary-container",
			outlined: "on-surface-variant",
			text: "primary"
		}[variant],
		selected,
		disabled,
		...props,
		children
	});
}

//#endregion
export { Button };