import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { M3Provider } from "@m3/providers/M3Provider";

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Tailored M3 Playground"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>        
        <body>
            <M3Provider>
                {children}
            </M3Provider>
        </body>
    </html>
  );
}
