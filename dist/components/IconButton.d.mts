
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { ComponentProps } from "react";

//#region src/components/IconButton.d.ts
interface IconButtonProps extends ComponentProps<"button"> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'round' | 'square';
  width?: 'default' | 'narrow' | 'wide';
  variant?: 'filled' | 'tonal' | 'outlined' | 'standard';
  selected?: boolean;
}
declare function IconButton({
  ref,
  className,
  size,
  shape,
  width,
  variant,
  selected,
  disabled,
  children,
  ...props
}: IconButtonProps): react_jsx_runtime0.JSX.Element;
//#endregion
export { IconButton };