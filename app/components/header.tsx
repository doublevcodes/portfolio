"use client"

import Link from "next/link"

export default function Header() {
    return(
        <header className="flex w-full h-full justify-start items-center font-sans text-xl">
            <Link className={`hover:bg-white hover:text-black duration-150 px-8 flex items-center justify-center h-full border-b border-white`} href="/">Me</Link>
            <Link className={`hover:bg-white hover:text-black duration-150 px-8 flex items-center justify-center h-full border-l border-b border-r border-white`} href="/blog">Blog</Link>
            <Link className={`hover:bg-white hover:text-black duration-150 px-8 flex items-center justify-center h-full border-r border-b border-white`} href="/projects">Projects</Link>
        </header>
    )
}