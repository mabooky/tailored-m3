import { cn } from "@m3/utils/cn";
import { ComponentProps } from "react";

export type TouchTargetProps = ComponentProps<"button"> & {
    minimumTouchTarget?: 'box' | 'hitbox';
}

export function TouchTarget({
    ref,
    className,
    minimumTouchTarget = 'box',
    disabled = false,
    children,
    ...props
}: TouchTargetProps) {
    return (
        <button
            ref={ref}
            className={cn(
                `relative focus-visible:outline-none cursor-pointer
                inline-flex justify-center items-center group`,
                minimumTouchTarget === 'box' && `min-w-12 min-h-12`,
                minimumTouchTarget === 'hitbox' && `m3-minimum-touch-target`,
                className
            )}
            disabled={disabled}
            {...props}>

            {children}
            
        </button>
    )
}