'use client';

import { ComponentProps, createContext } from "react";

interface ButtonGroupContextType {

}

export const ButtonGroupContext = createContext<ButtonGroupContextType | null>(null);

interface ButtonGroupProps extends ComponentProps<"div"> {
    
}

export function ButtonGroup({
    className,
    children,
    ...props
}: ButtonGroupProps) {
    return (
        <div
            className=""
            {...props}>
            {children}
        </div>
    )
}