
import { StatefulContainerProps } from "./StatefulContainer.mjs";
import * as react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/Card.d.ts
interface CardProps extends StatefulContainerProps {
  variant?: "elevated" | "filled" | "outlined";
  disabled?: boolean;
}
declare function Card({
  className,
  variant,
  disabled,
  children,
  ...props
}: CardProps): react_jsx_runtime0.JSX.Element;
//#endregion
export { Card };