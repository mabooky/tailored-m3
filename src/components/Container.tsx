import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";

export function Container({
    ref,
    className,
    children,
    ...props
}: ComponentProps<"div">) {
    return (
        <div
            ref={ref}
            className={cn(
                `relative`,
                className
            )}
            {...props}>
            {children}
        </div>
    )   
}