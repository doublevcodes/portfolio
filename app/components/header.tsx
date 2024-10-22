"use client"

import Link from "next/link"

export default function Header() {

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", "dark")
    }

    return(
        <header
            className="flex flex-row w-full h-[5vh] justify-start items-center font-sans text-xs md:text-xl *:flex *:h-full *:px-3 md:*:px-6 *:text-black dark:*:text-white *:border-black dark:*:border-white"
        >
            <Link className={`hover:text-slate-200 hover:bg-black dark:hover:text-slate-800 dark:hover:bg-white duration-150 items-center justify-center border-b border-r`} href="/">○</Link>
            <Link className={`hover:text-slate-200 hover:bg-black dark:hover:text-slate-800 dark:hover:bg-white duration-150 items-center justify-center border-b`} href="/me">Me</Link>
            <Link className={`hover:text-slate-200 hover:bg-black dark:hover:text-slate-800 dark:hover:bg-white duration-150 items-center justify-center border-l border-b border-r`} href="/blog">Blog</Link>
            <Link className={`hover:text-slate-200 hover:bg-black dark:hover:text-slate-800 dark:hover:bg-white duration-150 items-center justify-center border-r border-b`} href="/projects">Projects</Link>
            <button
                onClick={toggleTheme}
                className=""
            >
            </button>
        </header>
    )
}