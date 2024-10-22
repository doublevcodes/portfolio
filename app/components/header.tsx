import Link from "next/link"

export default function Header() {
    return(
        <header
            className="flex flex-row w-full h-[5vh] justify-start items-center font-sans text-xs md:text-xl *:flex *:h-full *:px-3 md:*:px-6"
        >
            <Link className={`hover:bg-white hover:text-black duration-150 items-center justify-center border-b border-r border-white`} href="/">○</Link>
            <Link className={`hover:bg-white hover:text-black duration-150 items-center justify-center border-b border-white`} href="/me">Me</Link>
            <Link className={`hover:bg-white hover:text-black duration-150 items-center justify-center border-l border-b border-r border-white`} href="/blog">Blog</Link>
            <Link className={`hover:bg-white hover:text-black duration-150 items-center justify-center border-r border-b border-white`} href="/projects">Projects</Link>
        </header>
    )
}