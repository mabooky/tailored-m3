import { ComponentProps } from "react";
import { cn } from "@m3/utils/cn";

export interface ContainerProps extends ComponentProps<"div"> {
    
}

export function Container({
    ref,
    className,
    children,
    ...props
}: ContainerProps) {
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