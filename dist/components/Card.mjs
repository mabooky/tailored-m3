
import { t as cn } from "../cn-I--53mi7.mjs";
import { StatefulContainer } from "./StatefulContainer.mjs";
import { jsx } from "react/jsx-runtime";

//#region src/components/Card.tsx
function Card({ className, variant = "elevated", disabled = false, children, ...props }) {
	return /* @__PURE__ */ jsx(StatefulContainer, {
		className: cn("rounded-md text-on-surface", {
			elevated: `
            bg-surface-container-low z-10 shadow-elevation-1 
            hover:z-11 hover:shadow-elevation-2
            disabled:bg-surface
        `,
			filled: `
            bg-surface-container-highest
        `,
			outlined: `
            bg-surface border border-outline-variant
            disabled:border-outline/12
        `
		}[variant], className),
		stateLayerColor: "on-surface",
		disabled,
		...props,
		children
	});
}

//#endregion
export { Card };