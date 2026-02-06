import { ComponentProps } from "react";
import { cn } from "@/utils/cn";
import { BG_SYSTEM_COLOR_MAP, SystemColor } from "@/types";

export interface StatefulContainerProps extends ComponentProps<"button"> {
    stateLayerColor?: SystemColor;
    selected?: boolean;
    disabled?: boolean;
}

export function StatefulContainer({
    ref,
    className,
    stateLayerColor,
    selected,
    disabled,
    children,
    ...props
}: StatefulContainerProps) {
    return (
        <button
            ref={ref}
            data-selected={selected}
            disabled={disabled}
            className={cn(
                `relative overflow-clip disabled:opacity-38`, // TODO: opacity가 border에도 영향을 미치는 것 같음
                className
            )}
            {...props}>
            <div
                className={`
                    absolute inset-0 size-full ${stateLayerColor ? BG_SYSTEM_COLOR_MAP[stateLayerColor] : ''}
                    opacity-0
                    hover:opacity-8
                    active:opacity-10
                `}
            />
            {children}
        </button>
    )
}