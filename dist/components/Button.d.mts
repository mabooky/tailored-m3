
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { ComponentProps } from "react";

//#region src/components/Button.d.ts
interface ButtonProps extends ComponentProps<"button"> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'round' | 'square';
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
  selected?: boolean;
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