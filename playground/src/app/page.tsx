import { AppBar, Button, Card, IconButton } from "@mabooky/tailored-m3";

export default function Home() {
    // Tailwind에서 custom breakpoint를 만든 것과 별개로 <meta> viewport 설정을 해줘야 한다는데...?

    return (
        <div
            className="w-full h-full flex flex-col items-center bg-black">
            <AppBar>
                <AppBar.LeadingButton>arrow_back</AppBar.LeadingButton>
            </AppBar>
            <IconButton size="xs" width="narrow">play_arrow</IconButton>
        </div>
    )
}