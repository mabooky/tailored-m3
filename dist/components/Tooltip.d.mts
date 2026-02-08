
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { ComponentProps } from "react";

//#region src/components/Tooltip.d.ts
interface TooltipProps extends ComponentProps<"div"> {
  variant?: 'plain' | 'rich';
}
declare function Tooltip({
  ref,
  className,
  variant,
  children,
  ...props
}: TooltipProps): react_jsx_runtime0.JSX.Element;
//#endregion
export { Tooltip };