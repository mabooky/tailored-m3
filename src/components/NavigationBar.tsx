'use client';

import { StatefulContainer } from "@m3/core/StatefulContainer";
import { TouchTarget, TouchTargetProps } from "@m3/core/TouchTarget";
import { cn } from "@m3/utils/cn";
import { ComponentProps, createContext, useContext, useState } from "react";

type NavigationBarContextValue = {
    itemLayout: NavigationBarProps['itemLayout'];
    activeItem: string;
    onItemClick: (item: string) => void;
}

const NavigationBarContext = createContext<NavigationBarContextValue>({
    itemLayout: 'vertical',
    activeItem: '',
    onItemClick: () => {}
});

function useNavigationBarContext() {
    return useContext(NavigationBarContext);
}

/* -------------------------------------------------------------------------- */

type NavigationBarProps = ComponentProps<"nav"> & {
    itemLayout?: 'vertical' | 'horizontal';
    activeItem: string;
};

export function NavigationBarRoot({
    ref,
    className,
    itemLayout = 'vertical',
    activeItem,
    children,
    ...props
}: NavigationBarProps) {
    const [currentActiveItem, setCurrentActiveItem] = useState(activeItem);

    return (
        <nav
            ref={ref}
            className={cn('m3-navigation-bar', className)}
            data-item-layout={itemLayout}
            {...props}>

            <NavigationBarContext.Provider
                value={{ 
                    itemLayout: itemLayout,
                    activeItem: currentActiveItem,
                    onItemClick: (item) => setCurrentActiveItem(item)
                }}>

                {children}

            </NavigationBarContext.Provider>

        </nav>
    );
}

/* -------------------------------------------------------------------------- */

export type NavigationBarItemProps = TouchTargetProps & {
    icon: string;
    label: string;
}

export function NavigationBarItem({
    ref,
    className,
    icon,
    label,
    children,
    ...props
}: NavigationBarItemProps) {
    const ctx = useNavigationBarContext();

    return (
        <TouchTarget
            ref={ref}
            className={cn('m3-navigation-bar__item', className)}
            data-active={label === ctx.activeItem}
            onClick={() => ctx.onItemClick(label)}
            
            {...props}>

            <StatefulContainer
                className="m3-navigation-bar__active-indicator">

                <span className="material-symbols-outlined m3-navigation-bar__icon">{icon}</span>

                {ctx.itemLayout === 'horizontal' && 
                    <span className="m3-navigation-bar__label">{label}</span>}

            </StatefulContainer>

            {ctx.itemLayout === 'vertical' && 
                <span className="m3-navigation-bar__label">{label}</span>}
            
        </TouchTarget>
    );
}