import { cn } from "@m3/utils/cn";
import { ComponentProps } from "react";

interface TouchSpacerProps extends ComponentProps<'div'> {
    
}

/**
 * TouchSpacer 컴포넌트는 자식 컴포넌트가 Material Design 3 가이드라인의 최소 터치 영역을 물리적으로 확보할 수 있도록
 * 바깥에 48×48px의 최소 공간을 마련해주는 역할을 합니다.
 */
export function TouchSpacer({
    ref,
    className,
    children,
    ...props
}: TouchSpacerProps) {
    return (
        <div
            ref={ref}
            className={cn(
                `min-w-[48px] min-h-[48px] w-fit h-fit flex justify-center items-center`,
                className
            )}
            {...props}>
            {children}
        </div>
    )
}