'use client'

import { usePathname } from "next/navigation"

export default function Window({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div className={`flex flex-col bg-white dark:bg-black md:opacity-0 shadow-lg hover:shadow-2xl md:border border-b border-black md:rounded-lg w-fit max-w-full md:max-w-[60%] h-full text-xs md:text-base md:animate-slidein300 duration-150 grow ${''}`}>
            <div className="relative flex flex-row items-center p-4 pb-4 border-b border-black cursor-pointer">
                <div className="relative flex flex-row gap-2 *:rounded-full *:w-4 *:h-4 *:duration-300 *:cursor-pointer *:select-none">
                    <span className="bg-red-500 hover:bg-red-700 brightness-125">&nbsp;</span>
                    <span className="bg-yellow-500 hover:bg-yellow-700 brightness-125">&nbsp;</span>
                    <span className="bg-green-500 hover:bg-green-700 brightness-125">&nbsp;</span>
                </div>
                <p className="mx-auto font-mono cursor-text">vivaan ~ {usePathname()}/</p>
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}