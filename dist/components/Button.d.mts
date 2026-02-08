
import { StatefulContainerProps } from "./StatefulContainer.mjs";
import * as react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/Button.d.ts
interface ButtonProps extends StatefulContainerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'round' | 'square';
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
}
declare function Button({
  ref,
  className,
  size,
  shape,
  variant,
  selected,
  disabled,
  children,
  ...props
}: ButtonProps): react_jsx_runtime0.JSX.Element;
//#endregion
export { Button };