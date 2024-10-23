import Link from "next/link"

export default function Header() {

    return(
        <div className="md:flex md:flex-row w-full">
            <header
                className="md:flex bg-white md:*:hover:shadow-lg md:flex-row grid grid-rows-1 grid-cols-4 h-[10%] *:p-3 justify-start items-center font-sans text-xs md:text-base md:*:px-6 *:flex *:h-full *:text-black dark:*:text-white *:border-black dark:*:border-white"
            >
                <Link className={`hover:text-white hover:bg-black dark:hover:text-slate-800 dark:hover:bg-white duration-150 items-center justify-center border-b border-r`} href="/">○</Link>
                <Link className={`hover:text-white hover:bg-black dark:hover:text-slate-800 dark:hover:bg-white duration-150 items-center justify-center border-b`} href="/me">Me</Link>
                <Link className={`hover:text-white hover:bg-black dark:hover:text-slate-800 dark:hover:bg-white duration-150 items-center justify-center border-l border-b border-r`} href="/blog">Blog</Link>
                <Link className={`hover:text-white hover:bg-black dark:hover:text-slate-800 dark:hover:bg-white duration-150 items-center justify-center border-b md:border-r`} href="/projects">Projects</Link>
            </header>
            <div className="flex-1"><p></p></div>
        </div>
    )
}