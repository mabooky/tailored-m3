import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";
import { BG_SYSTEM_COLOR_MAP, SystemColor } from "@m3/types";

export interface StatefulContainerProps extends ComponentProps<"button"> {
    stateLayerColor?: SystemColor;
    minimumTouchTarget?: boolean;
    selected?: boolean;
    disabled?: boolean;
}

export function StatefulContainer({
    ref,
    className,
    stateLayerColor,
    minimumTouchTarget,
    selected = false,
    disabled = false,
    children,
    ...props 
}: StatefulContainerProps) {
    return (
        <button
            ref={ref}
            className={cn(
                `relative disabled:opacity-38 group`,
                minimumTouchTarget && 'm3-minimum-touch-target',
                className
            )}
            data-selected={selected}
            disabled={disabled}
            {...props}>
            {children}

            {/* State Layer */}
            <div
                className={cn(
                    `
                    absolute inset-0 size-full rounded-[inherit] opacity-0 pointer-events-none
                    group-hover:opacity-8 group-active:opacity-10
                    `,
                    stateLayerColor ? BG_SYSTEM_COLOR_MAP[stateLayerColor] : null
                )}
            />
        </button>
    )
}