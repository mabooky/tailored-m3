import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";

export type StatefulContainerProps = ComponentProps<"div">;

export function StatefulContainer({
    ref,
    className,
    children,
    ...props 
}: StatefulContainerProps) {
    return (
        <div
            ref={ref}
            className={cn(`relative`, className)}
            {...props}>

            {children}

            {/* State Layer */}
            <div className="absolute inset-0 size-full rounded-[inherit] opacity-0 pointer-events-none bg-current group-hover:opacity-8 group-focus:opacity-10 group-active:opacity-10" />

        </div>
    )
}