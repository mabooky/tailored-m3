'use client';

import { AppBar, IconButton, Pane } from "@mabooky/tailored-m3";
import { useState } from "react";

export default function Home() {
    const [iconButtonsSelected, setIconButtonsSelected] = useState([ false, false, false, false, false ]);

    return (
        <Pane
            className="w-full h-full flex flex-col items-center">
            <AppBar variant="small">
                <AppBar.LeadingButton>arrow_back</AppBar.LeadingButton>
                <AppBar.Headline>Tailored M3 Playground</AppBar.Headline>
                <AppBar.TrailingButton>attach_file</AppBar.TrailingButton>
                <AppBar.TrailingButton>event</AppBar.TrailingButton>
                <AppBar.TrailingButton>more_vert</AppBar.TrailingButton>
            </AppBar>
            <main className="flex gap-2 items-center">
                <IconButton
                    size="xs"
                    selected={iconButtonsSelected[0]}
                    onPointerUp={() => {
                        setIconButtonsSelected(prev => {
                            const newSelected = [...prev];
                            newSelected[0] = !newSelected[0];
                            return newSelected;
                        });
                    }}>
                    settings
                </IconButton>
                <IconButton
                    size="sm"
                    selected={iconButtonsSelected[1]}
                    onPointerUp={() => {
                        setIconButtonsSelected(prev => {
                            const newSelected = [...prev];
                            newSelected[1] = !newSelected[1];
                            return newSelected;
                        });
                    }}>
                    settings
                </IconButton>
                <IconButton
                    size="md"
                    selected={iconButtonsSelected[2]}
                    onPointerUp={() => {
                        setIconButtonsSelected(prev => {
                            const newSelected = [...prev];
                            newSelected[2] = !newSelected[2];
                            return newSelected;
                        });
                    }}>
                    settings
                </IconButton>
                <IconButton
                    size="lg"
                    selected={iconButtonsSelected[3]}
                    onPointerUp={() => {
                        setIconButtonsSelected(prev => {
                            const newSelected = [...prev];
                            newSelected[3] = !newSelected[3];
                            return newSelected;
                        });
                    }}>
                    settings
                </IconButton>
                <IconButton
                    size="xl"
                    selected={iconButtonsSelected[4]}
                    onPointerUp={() => {
                        setIconButtonsSelected(prev => {
                            const newSelected = [...prev];
                            newSelected[4] = !newSelected[4];
                            return newSelected;
                        });
                    }}>
                    settings
                </IconButton>
            </main>
        </Pane>
    )
}