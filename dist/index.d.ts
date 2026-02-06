import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ComponentProps } from 'react';
import { ClassNameValue } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<"button"> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'round' | 'square';
    variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
    selected?: boolean;
}
declare function Button({ ref, className, size, shape, variant, selected, disabled, children, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface ButtonGroupContextType {
}
declare const ButtonGroupContext: react.Context<ButtonGroupContextType | null>;
interface ButtonGroupProps extends ComponentProps<"div"> {
}
declare function ButtonGroup({ className, children, ...props }: ButtonGroupProps): react_jsx_runtime.JSX.Element;

type SystemColor = 'primary' | 'on-primary' | 'primary-container' | 'on-primary-container' | 'secondary' | 'on-secondary' | 'secondary-container' | 'on-secondary-container' | 'tertiary' | 'on-tertiary' | 'tertiary-container' | 'on-tertiary-container' | 'error' | 'on-error' | 'error-container' | 'on-error-container' | 'primary-fixed' | 'primary-fixed-dim' | 'on-primary-fixed' | 'on-primary-fixed-variant' | 'secondary-fixed' | 'secondary-fixed-dim' | 'on-secondary-fixed' | 'on-secondary-fixed-variant' | 'tertiary-fixed' | 'tertiary-fixed-dim' | 'on-tertiary-fixed' | 'on-tertiary-fixed-variant' | 'surface-dim' | 'surface' | 'surface-bright' | 'surface-container-lowest' | 'surface-container-low' | 'surface-container' | 'surface-container-high' | 'surface-container-highest' | 'on-surface' | 'on-surface-variant' | 'outline' | 'outline-variant' | 'inverse-surface' | 'inverse-on-surface' | 'inverse-primary' | 'scrim' | 'shadow';
declare const BG_SYSTEM_COLOR_MAP: Record<SystemColor, string>;

interface StatefulContainerProps extends ComponentProps<"button"> {
    stateLayerColor?: SystemColor;
    selected?: boolean;
    disabled?: boolean;
}
declare function StatefulContainer({ ref, className, stateLayerColor, selected, disabled, children, ...props }: StatefulContainerProps): react_jsx_runtime.JSX.Element;

interface CardProps extends StatefulContainerProps {
    variant?: "elevated" | "filled" | "outlined";
    disabled?: boolean;
}
declare function Card({ className, variant, disabled, children, ...props }: CardProps): react_jsx_runtime.JSX.Element;

interface FABProps extends ComponentProps<"button"> {
    variant?: "medium" | "large";
}
declare function FAB({ className, variant, children, ...props }: FABProps): react_jsx_runtime.JSX.Element;

interface IconButtonProps extends ComponentProps<"button"> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'round' | 'square';
    width?: 'default' | 'narrow' | 'wide';
    variant?: 'filled' | 'tonal' | 'outlined' | 'standard';
    selected?: boolean;
}
declare function IconButton({ ref, className, size, shape, width, variant, selected, disabled, children, ...props }: IconButtonProps): react_jsx_runtime.JSX.Element;

declare function cn(...classLists: ClassNameValue[]): string;

export { BG_SYSTEM_COLOR_MAP, Button, ButtonGroup, ButtonGroupContext, Card, FAB, IconButton, StatefulContainer, type StatefulContainerProps, type SystemColor, cn };
