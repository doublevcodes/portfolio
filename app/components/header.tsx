import Link from "next/link"

export default function Header() {

    return(
        <div className="w-full md:flex md:flex-row">
            <header
                className="top-0 sticky *:flex md:flex md:flex-row justify-start items-center dark:*:border-white grid grid-cols-4 grid-rows-1 bg-white md:*:hover:shadow-lg md:*:px-6 *:p-3 *:border-black h-[10%] *:h-full font-sans text-xs *:text-black md:text-base dark:*:text-white"
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