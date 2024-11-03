import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";


export const metadata: Metadata = {
    title: "vivaan.",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div
                    className="flex flex-col items-center font-sans text-black justify-items-center selection:bg-teal-200 bg-gradient-to-br from-gray-300 dark:from-gray-900 via-gray-50 dark:via-slate-950 to-gray-300 dark:to-gray-900 dark:text-white"
                >
                    {children}
                </div>
                <Analytics/>
            </body>
        </html>
    );
}
