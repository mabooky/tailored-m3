import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { MaterialThemeProvider } from '@m3/components/MaterialThemeProvider'

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
            <MaterialThemeProvider>
                {children}
            </MaterialThemeProvider>
        </body>
    </html>
  );
}
