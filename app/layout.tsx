import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Header from "./components/header";


export const metadata: Metadata = {
  title: "vivaan.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`antialiased`}
      >
        <div className="flex flex-col text-black dark:text-white items-center justify-items-center min-h-[100vmin] max-h-[100vmin] bg-gradient-to-br from-slate-200 via-gray-50 to-slate-200 dark:from-gray-900 dark:via-slate-950 dark:to-gray-900">
          <Header></Header>
          {children}
        </div>
        <Analytics/>
      </body>
    </html>
  );
}
