
import * as react_jsx_runtime0 from "react/jsx-runtime";
import * as react from "react";
import { ComponentProps } from "react";

//#region src/components/ButtonGroup.d.ts
interface ButtonGroupContextType {}
declare const ButtonGroupContext: react.Context<ButtonGroupContextType | null>;
interface ButtonGroupProps extends ComponentProps<"div"> {}
declare function ButtonGroup({
  className,
  children,
  ...props
}: ButtonGroupProps): react_jsx_runtime0.JSX.Element;
//#endregion
export { ButtonGroup, ButtonGroupContext };