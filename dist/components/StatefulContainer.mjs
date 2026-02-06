
import { n as cn, t as BG_SYSTEM_COLOR_MAP } from "../types-C8hNyC--.mjs";
import { jsx, jsxs } from "react/jsx-runtime";

//#region src/components/StatefulContainer.tsx
function StatefulContainer({ ref, className, stateLayerColor, selected, disabled, children, ...props }) {
	return /* @__PURE__ */ jsxs("button", {
		ref,
		"data-selected": selected,
		disabled,
		className: cn(`relative overflow-clip disabled:opacity-38`, className),
		...props,
		children: [/* @__PURE__ */ jsx("div", { className: `
                    absolute inset-0 size-full ${stateLayerColor ? BG_SYSTEM_COLOR_MAP[stateLayerColor] : ""}
                    opacity-0
                    hover:opacity-8
                    active:opacity-10
                ` }), children]
	});
}

//#endregion
export { StatefulContainer };