import { cn } from "../utils/cn";
import { StatefulContainer, StatefulContainerProps } from "./StatefulContainer";

interface CardProps extends StatefulContainerProps {
    variant?: "elevated" | "filled" | "outlined";
    disabled?: boolean;
}

export function Card({
    className,
    variant = "elevated",
    disabled = false,
    children,
    ...props
}: CardProps) {
    const variantStyles = {
        elevated: `
            bg-surface-container-low z-10 shadow-elevation-1 
            hover:z-11 hover:shadow-elevation-2
            disabled:bg-surface
        `,
        filled: `
            bg-surface-container-highest
        `,
        outlined: `
            bg-surface border border-outline-variant
            disabled:border-outline/12
        `,
    };

    return (
        <StatefulContainer
            className={cn(
                'rounded-md text-on-surface',
                variantStyles[variant],
                className
            )}
            stateLayerColor="on-surface"
            disabled={disabled}
            {...props}>
            {children}
        </StatefulContainer> 
    )
}