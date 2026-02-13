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
    minimumTouchTarget = false,
    /* 
        minimumTouchTarget은 접근성 관련 설정이기 때문에 기본값 true가 옳으나,
        항상 true로 둘 경우 after 의사 요소가 불필요한 곳에도 렌더링된다.
        따라서, 각 컴포넌트에서 이 기능이 필요한지 판단하고 항상 true인 것과 같은 효과를 낼 것!
    */
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