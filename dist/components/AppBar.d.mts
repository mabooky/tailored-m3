
import { ContainerProps } from "./Container.mjs";
import { IconButtonProps } from "./IconButton.mjs";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { ComponentProps } from "react";

//#region src/components/AppBar.d.ts
interface AppBarProps extends ContainerProps {
  variant?: 'search' | 'small' | 'medium-flexible' | 'large-flexible';
}
declare function AppBarRoot({
  ref,
  className,
  variant,
  children,
  ...props
}: AppBarProps): react_jsx_runtime0.JSX.Element;
interface AppBarLeadingButtonProps extends IconButtonProps {}
declare function AppBarLeadingButton({
  ref,
  className,
  children,
  ...props
}: AppBarLeadingButtonProps): react_jsx_runtime0.JSX.Element;
interface AppBarHeadlineProps extends ComponentProps<"p"> {}
declare const AppBar: typeof AppBarRoot & {
  LeadingButton: typeof AppBarLeadingButton;
};
//#endregion
export { AppBar, AppBarHeadlineProps, AppBarLeadingButtonProps, AppBarProps };