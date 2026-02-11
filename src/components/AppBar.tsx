import { cn } from "@m3/utils/cn";
import { Container, ContainerProps } from "../core/Container";
import { IconButton, IconButtonProps } from "./IconButton";
import { ComponentProps } from "react";

export interface AppBarProps extends ContainerProps {
    variant?: 'search' | 'small' | 'medium-flexible' | 'large-flexible'
}

function AppBarRoot({
    ref,
    className,
    variant,
    children,
    ...props
}: AppBarProps) {
    return (
        <Container
            ref={ref}
            className={cn(
                `flex w-full h-[64px] bg-surface items-center`
            )}
            {...props}>
            {children}
        </Container>
    )
}

export interface AppBarLeadingButtonProps extends IconButtonProps {

}

function AppBarLeadingButton({
    ref,
    className,
    children,
    ...props
}: AppBarLeadingButtonProps) {
    return (
        <IconButton
            ref={ref}
            variant="standard"
            size="sm"
            className={cn(
                `mx-[4px]`,
                className
            )}
            {...props}>
            {children}
        </IconButton>
    )
}

export interface AppBarHeadlineProps extends ComponentProps<"p"> {
    
}

export const AppBar = Object.assign(AppBarRoot, {
    LeadingButton: AppBarLeadingButton,
})