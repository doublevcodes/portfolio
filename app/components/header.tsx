"use client"

import Link from "next/link"

export default function Header() {
    return(
        <header className="flex w-full h-full justify-start items-center font-[family-name:var(--font-spray-letters)] border-b">
            <Link className={`hover:bg-white hover:text-black text-2xl font-bold tracking-wider px-8 flex items-center justify-center h-full`} href="/">Home</Link>
            <Link className={`hover:bg-white hover:text-black text-2xl font-bold tracking-wider px-8 flex items-center justify-center h-full`} href="/about-me">Me</Link>
            <Link className={`hover:bg-white hover:text-black text-2xl font-bold tracking-wider px-8 flex items-center justify-center h-full`} href="/blog">Blog</Link>
            <Link className={`hover:bg-white hover:text-black text-2xl font-bold tracking-wider px-8 flex items-center justify-center h-full`} href="/projects">Projects</Link>
        </header>
    )
}