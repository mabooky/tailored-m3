import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";

export type StatefulContainerProps = ComponentProps<"div"> & {
    usesRipple?: boolean;
}

export function StatefulContainer({
    ref,
    className,
    usesRipple = true, // TODO: Ripple 효과 구현
    children,
    ...props 
}: StatefulContainerProps) {
    return (
        <div
            ref={ref}
            className={cn(`m3-stateful-container`, className)}
            {...props}>

            {children}

        </div>
    )
}