
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
export { cn as t };