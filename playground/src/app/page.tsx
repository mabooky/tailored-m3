'use client';

import { AppBar } from "@m3/components/AppBar";
import { Button, Card, IconButton } from "@m3/index";

export default function Home() {
    return (
        <div
            className="flex flex-col w-full gap-16 items-start">
            <AppBar>
                <AppBar.LeadingButton>arrow_back</AppBar.LeadingButton>
            </AppBar>
            <Button onClick={() => alert('1억이 결제되었습니다.')}>Make payment</Button>
            <Card>Play relaxing songs</Card>
            <IconButton>play_arrow</IconButton>
        </div>
    )
}
