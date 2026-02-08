
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { ComponentProps } from "react";

//#region src/components/FAB.d.ts
interface FABProps extends ComponentProps<"button"> {
  variant?: "medium" | "large";
}
declare function FAB({
  className,
  variant,
  children,
  ...props
}: FABProps): react_jsx_runtime0.JSX.Element;
//#endregion
export { FAB };