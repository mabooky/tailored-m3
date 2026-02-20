'use client';

import { createContext } from "react";

const M3MotionSchemeContext = createContext<'standard' | 'expressive'>('expressive');

export function M3MotionSchemeProvider({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <M3MotionSchemeContext.Provider value={'expressive'}>
            {children}
        </M3MotionSchemeContext.Provider>
    );
}