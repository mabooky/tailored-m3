import { cn } from "@m3/utils/cn";
import { StatefulContainer, StatefulContainerProps } from "../core/StatefulContainer";
import { ComponentProps } from "react";

interface CardProps extends StatefulContainerProps {
    variant?: "elevated" | "filled" | "outlined";
    disabled?: boolean;
}

export function CardRoot({
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

export interface CardHeadlineProps extends ComponentProps<"p"> {

}

export function CardHeadline({
    ref,
    className,
    children,
    ...props
}: CardHeadlineProps) {
    return (
        <p
            ref={ref}
            className="typescale-display-small mx-[16px]"
            {...props}>
            {children}
        </p>
    )
}

export const Card = Object.assign(CardRoot, {
    Headline: CardHeadline,
})