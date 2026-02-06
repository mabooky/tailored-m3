
import { extendTailwindMerge } from "tailwind-merge";

//#region src/utils/cn.ts
const extendedTailwindMerge = extendTailwindMerge({ extend: { classGroups: {
	rounded: ["rounded-full-var"],
	shadow: [
		"shadow-elevation-0",
		"shadow-elevation-1",
		"shadow-elevation-2",
		"shadow-elevation-3",
		"shadow-elevation-4",
		"shadow-elevation-5"
	],
	typescale: [
		"typescale-display-large",
		"typescale-display-medium",
		"typescale-display-small",
		"typescale-headline-large",
		"typescale-headline-medium",
		"typescale-headline-small",
		"typescale-title-large",
		"typescale-title-medium",
		"typescale-title-small",
		"typescale-body-large",
		"typescale-body-medium",
		"typescale-body-small",
		"typescale-label-large",
		"typescale-label-medium",
		"typescale-label-small",
		"typescale-emphasized-display-large",
		"typescale-emphasized-display-medium",
		"typescale-emphasized-display-small",
		"typescale-emphasized-headline-large",
		"typescale-emphasized-headline-medium",
		"typescale-emphasized-headline-small",
		"typescale-emphasized-title-large",
		"typescale-emphasized-title-medium",
		"typescale-emphasized-title-small",
		"typescale-emphasized-body-large",
		"typescale-emphasized-body-medium",
		"typescale-emphasized-body-small",
		"typescale-emphasized-label-large",
		"typescale-emphasized-label-medium",
		"typescale-emphasized-label-small"
	]
} } });
function cn(...classLists) {
	return extendedTailwindMerge(classLists);
}

//#endregion
//#region src/types.ts
const BG_SYSTEM_COLOR_MAP = {
	"primary": "bg-primary",
	"on-primary": "bg-on-primary",
	"primary-container": "bg-primary-container",
	"on-primary-container": "bg-on-primary-container",
	"secondary": "bg-secondary",
	"on-secondary": "bg-on-secondary",
	"secondary-container": "bg-secondary-container",
	"on-secondary-container": "bg-on-secondary-container",
	"tertiary": "bg-tertiary",
	"on-tertiary": "bg-on-tertiary",
	"tertiary-container": "bg-tertiary-container",
	"on-tertiary-container": "bg-on-tertiary-container",
	"error": "bg-error",
	"on-error": "bg-on-error",
	"error-container": "bg-error-container",
	"on-error-container": "bg-on-error-container",
	"primary-fixed": "bg-primary-fixed",
	"primary-fixed-dim": "bg-primary-fixed-dim",
	"on-primary-fixed": "bg-on-primary-fixed",
	"on-primary-fixed-variant": "bg-on-primary-fixed-variant",
	"secondary-fixed": "bg-secondary-fixed",
	"secondary-fixed-dim": "bg-secondary-fixed-dim",
	"on-secondary-fixed": "bg-on-secondary-fixed",
	"on-secondary-fixed-variant": "bg-on-secondary-fixed-variant",
	"tertiary-fixed": "bg-tertiary-fixed",
	"tertiary-fixed-dim": "bg-tertiary-fixed-dim",
	"on-tertiary-fixed": "bg-on-tertiary-fixed",
	"on-tertiary-fixed-variant": "bg-on-tertiary-fixed-variant",
	"surface-dim": "bg-surface-dim",
	"surface": "bg-surface",
	"surface-bright": "bg-surface-bright",
	"surface-container-lowest": "bg-surface-container-lowest",
	"surface-container-low": "bg-surface-container-low",
	"surface-container": "bg-surface-container",
	"surface-container-high": "bg-surface-container-high",
	"surface-container-highest": "bg-surface-container-highest",
	"on-surface": "bg-on-surface",
	"on-surface-variant": "bg-on-surface-variant",
	"outline": "bg-outline",
	"outline-variant": "bg-outline-variant",
	"inverse-surface": "bg-inverse-surface",
	"inverse-on-surface": "bg-inverse-on-surface",
	"inverse-primary": "bg-inverse-primary",
	"scrim": "bg-scrim",
	"shadow": "bg-shadow"
};

//#endregion
export { cn as n, BG_SYSTEM_COLOR_MAP as t };