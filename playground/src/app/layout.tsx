import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { M3ThemeProvider } from '@mabooky/tailored-m3'

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
        <body>
            <M3ThemeProvider>
                {children}
            </M3ThemeProvider>
        </body>
    </html>
  );
}
