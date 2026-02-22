'use client';

import { AppBar, IconButton } from "@mabooky/tailored-m3";
import { useState } from "react";

export default function Home() {
    // 질문: Tailwind에서 custom breakpoint를 만든 것과 별개로 <meta> viewport 설정을 해줘야 한다는데...?
    // 답변: Tailwind의 custom breakpoint는 CSS 미디어 쿼리를 통해 특정 화면 크기에서 다른 스타일을 적용할 수 있게 해주는 기능입니다. 반면에 <meta> viewport 설정은 모바일 브라우저에서 페이지의 크기와 스케일링을 제어하는 역할을 합니다. Tailwind의 custom breakpoint를 사용하더라도, 모바일 브라우저에서 올바르게 작동하려면 <meta name="viewport" content="width=device-width, initial-scale=1">와 같은 설정이 필요합니다. 이 설정이 없으면 모바일 브라우저가 페이지를 데스크톱 버전으로 렌더링할 수 있으며, Tailwind의 responsive 스타일이 예상대로 작동하지 않을 수 있습니다. 따라서, Tailwind의 custom breakpoint를 사용할 때는 항상 <meta> viewport 설정을 포함하는 것이 좋습니다.

    // TODO: <meta> viewport 설정

    const [iconButtonsSelected, setIconButtonsSelected] = useState([ false, false, false, false, false ]);

    return (
        <div
            className="w-full h-full flex flex-col items-center">
            <AppBar variant="small">
                <AppBar.LeadingButton>arrow_back</AppBar.LeadingButton>
                <AppBar.Headline>Tailored M3 Playground</AppBar.Headline>
                <AppBar.TrailingButton>attach_file</AppBar.TrailingButton>
                <AppBar.TrailingButton>event</AppBar.TrailingButton>
                <AppBar.TrailingButton>more_vert</AppBar.TrailingButton>
            </AppBar>
            <main className="flex gap-2">
                <IconButton
                    size="xs"
                    selected={iconButtonsSelected[0]}
                    onClick={() => {
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
                    onClick={() => {
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
                    onClick={() => {
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
                    onClick={() => {
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
                    onClick={() => {
                        setIconButtonsSelected(prev => {
                            const newSelected = [...prev];
                            newSelected[4] = !newSelected[4];
                            return newSelected;
                        });
                    }}>
                    settings
                </IconButton>
            </main>
        </div>
    )
}