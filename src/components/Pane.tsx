import { ComponentProps } from "react";

type PaneProps = ComponentProps<"div">;

export function Pane({
    className,
    children,
    ...props
}: PaneProps) {
    return (
        <div
            className={className}
            {...props}>

            {children}

        </div>
    )
}