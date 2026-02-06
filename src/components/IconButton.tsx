import { ComponentProps } from "react";
import { StatefulContainer } from "./StatefulContainer";
import { cn } from "@/utils/cn";
import { SystemColor } from "@/types";

interface IconButtonProps extends ComponentProps<"button"> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'round' | 'square';
    width?: 'default' | 'narrow' | 'wide';
    variant?: 'filled' | 'tonal' | 'outlined' | 'standard';
    selected?: boolean;
}

export function IconButton({
    ref,
    className,
    size = 'sm',
    shape = 'round',
    width = 'default',
    variant = 'filled',
    selected,
    disabled = false,
    children,
    ...props
}: IconButtonProps) {
    const isToggleButton = typeof selected === 'boolean';

    const sizeStyles = {
        xs: `h-var-[32px] rounded-md text-[20px] active:rounded-sm`,
        sm: `h-var-[40px] rounded-md text-[24px] active:rounded-sm`,
        md: `h-var-[56px] rounded-lg text-[24px] active:rounded-md`,
        lg: `h-var-[96px] rounded-xl text-[32px] active:rounded-lg`,
        xl: `h-var-[136px] rounded-xl text-[40px] active:rounded-lg`
    }
    /*
        shapeVariantStyles가 없는 이유:
        sizeVariantStyles를 shape가 square라고 가정하여 작성하고, 
        class merging 단계에서 round인 경우 rounded-full-var 속성을 덮어쓰는 방식 사용.
    */
    const widthStylesBySize = {
        xs: {
            default: 'w-[32px]',
            narrow: 'w-[28px]',
            wide: 'w-[40px]',
        },
        sm: {
            default: 'w-[40px]',
            narrow: 'w-[32px]',
            wide: 'w-[52px]',
        },
        md: {
            default: 'w-[56px]',
            narrow: 'w-[48px]',
            wide: 'w-[72px]',
        },
        lg: {
            default: 'w-[96px]',
            narrow: 'w-[64px]',
            wide: 'w-[128px]',
        },
        xl: {
            default: 'w-[136px]',
            narrow: 'w-[104px]',
            wide: 'w-[184px]',
        }
    };
    const variantStyles = {
        filled: isToggleButton
            ? `bg-surface-container text-on-surface-variant selected:bg-primary selected:text-on-primary`
            : `bg-primary text-on-primary`,
        tonal: isToggleButton
            ? `bg-secondary-container text-on-secondary-container selected:bg-secondary selected:text-on-secondary`
            : `bg-secondary-container text-on-secondary-container`,
        outlined: cn(
            `border`,
            isToggleButton
                ? `border-outline-variant text-on-surface-variant selected:bg-inverse-surface selected:text-inverse-on-surface`
                : `border-outline-variant text-on-surface-variant`,
        ),
        standard: isToggleButton
            ? `text-on-surface-variant selected:text-primary`
            : `text-on-surface-variant`,
    };

    const variantStateLayerColors: Record<string, SystemColor> = {
        filled: (isToggleButton && !selected) ? `on-surface-variant` : `on-primary`,
        tonal: (isToggleButton && selected) ? `on-secondary` : `on-secondary-container`,
        outlined: (isToggleButton && selected) ? `inverse-on-surface` : `on-surface-variant`,
        standard: (isToggleButton && selected) ? `primary` : `on-surface-variant`,
    }

    return (
        <StatefulContainer
            ref={ref}
            className={cn(
                `flex justify-center items-center cursor-pointer transition-all duration-100 ease-out`,
                sizeStyles[size],
                shape === 'round' ? 'rounded-full-var' : '',
                widthStylesBySize[size][width],
                variantStyles[variant],
                className
            )}
            stateLayerColor={variantStateLayerColors[variant]}
            selected={selected}
            disabled={disabled}
            {...props}>
            <span className="material-symbols-outlined select-none">{children}</span>
        </StatefulContainer>
    )
}