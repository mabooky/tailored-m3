import { StatefulContainer, StatefulContainerProps } from "@m3/core/StatefulContainer";
import { cn } from "@m3/utils/cn";
import { SystemColor } from "@m3/types";

export interface IconButtonProps extends StatefulContainerProps {
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

    /*
        sizeStyles를 shape가 square라고 가정하여 작성하고, 
        class merging 단계에서 round인 경우 rounded-var-full 속성을 덮어쓰는 방식 사용.
    */
    const sizeStyles = {
        xs: `h-var-8 rounded-md text-5 active:rounded-sm`,
        sm: `h-var-10 rounded-md text-6 active:rounded-sm`,
        md: `h-var-14 rounded-lg text-6 active:rounded-md`,
        lg: `h-var-24 rounded-xl text-8 active:rounded-lg`,
        xl: `h-var-34 rounded-xl text-10 active:rounded-lg`
    }

    const widthStyles = {
        xs: { default: 'w-8', narrow: 'w-7', wide: 'w-10' },
        sm: { default: 'w-10', narrow: 'w-8', wide: 'w-13' },
        md: { default: 'w-14', narrow: 'w-12', wide: 'w-18' },
        lg: { default: 'w-24', narrow: 'w-16', wide: 'w-32' },
        xl: { default: 'w-34', narrow: 'w-26', wide: 'w-46' }
    };

    const defaultStyles = {
        filled: `bg-primary text-on-primary`,
        tonal: `bg-secondary-container text-on-secondary-container`,
        outlined: `border border-outline-variant text-on-surface-variant`,
        standard: `text-on-surface-variant`,
    };
    const toggleStyles = {
        filled: `bg-surface-container text-on-surface-variant selected:bg-primary selected:text-on-primary`,
        tonal: `bg-secondary-container text-on-secondary-container selected:bg-secondary selected:text-on-secondary`,
        outlined: `border border-outline-variant text-on-surface-variant selected:bg-inverse-surface selected:text-inverse-on-surface`,
        standard: `text-on-surface-variant selected:text-primary`,
    };
    const variantStyles = isToggleButton ? toggleStyles : defaultStyles;

    const stateLayerColors: Record<string, SystemColor> = {
        filled: (isToggleButton && !selected) ? `on-surface-variant` : `on-primary`,
        tonal: (isToggleButton && selected) ? `on-secondary` : `on-secondary-container`,
        outlined: (isToggleButton && selected) ? `inverse-on-surface` : `on-surface-variant`,
        standard: (isToggleButton && selected) ? `primary` : `on-surface-variant`,
    }

    return (
        <StatefulContainer
            ref={ref}
            className={cn(
                `
                flex justify-center items-center cursor-pointer
                transition-[border-radius] ease-motion-spring-fast-spatial duration-350
                `,
                sizeStyles[size],
                shape === 'round' && 'rounded-var-full',
                widthStyles[size][width],
                variantStyles[variant],
                className
            )}
            stateLayerColor={stateLayerColors[variant]}
            minimumTouchTarget={size === 'xs' || size === 'sm'}
            selected={selected}
            disabled={disabled}
            {...props}>

            <span className="material-symbols-outlined select-none">{children}</span>
            
        </StatefulContainer>
    );
}