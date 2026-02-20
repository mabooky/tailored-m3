import { AppBar, IconButton } from "@mabooky/tailored-m3";

export default function Home() {
    // Tailwind에서 custom breakpoint를 만든 것과 별개로 <meta> viewport 설정을 해줘야 한다는데...?

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
            <IconButton size="xl" width="default">play_arrow</IconButton>
        </div>
    )
}