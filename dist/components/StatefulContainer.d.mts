
import { n as SystemColor } from "../types-BQc87Ete.mjs";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { ComponentProps } from "react";

//#region src/components/StatefulContainer.d.ts
interface StatefulContainerProps extends ComponentProps<"button"> {
  stateLayerColor?: SystemColor;
  selected?: boolean;
  disabled?: boolean;
}
declare function StatefulContainer({
  ref,
  className,
  stateLayerColor,
  selected,
  disabled,
  children,
  ...props
}: StatefulContainerProps): react_jsx_runtime0.JSX.Element;
//#endregion
export { StatefulContainer, StatefulContainerProps };