'use client';

import { M3MotionSchemeProvider } from "./M3MotionSchemeProvider";
import { M3ThemeProvider } from "./M3ThemeProvider";

export function M3Provider({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    return (
        <M3ThemeProvider>
            <M3MotionSchemeProvider>
                {children}
            </M3MotionSchemeProvider>
        </M3ThemeProvider>
    );
}