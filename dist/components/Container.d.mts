
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { ComponentProps } from "react";

//#region src/components/Container.d.ts
interface ContainerProps extends ComponentProps<"div"> {}
declare function Container({
  ref,
  className,
  children,
  ...props
}: ContainerProps): react_jsx_runtime0.JSX.Element;
//#endregion
export { Container, ContainerProps };