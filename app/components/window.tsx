'use client'

import { usePathname } from "next/navigation"

export default function Window({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div className={`flex flex-col bg-white dark:bg-black md:opacity-0 shadow-lg hover:shadow-2xl md:border border-b border-black rounded-lg w-fit max-w-full md:max-w-[60%] h-full text-xs md:text-base md:animate-slidein300 duration-150 grow ${''}`}>
            <div className="relative flex flex-row items-center p-4 pb-4 border-b border-black cursor-pointer">
                <div className="relative flex flex-row gap-2 *:rounded-full *:w-4 *:h-4 *:duration-300 *:cursor-pointer *:select-none shrink-0">
                    <span className="brightness-125 bg-red-500 hover:bg-red-700">&nbsp;</span>
                    <span className="brightness-125 bg-yellow-500 hover:bg-yellow-700">&nbsp;</span>
                    <span className="brightness-125 bg-green-500 hover:bg-green-700">&nbsp;</span>
                </div>
                <p className="left-1/2 absolute font-mono -translate-x-1/2 cursor-text">vivaan ~ {usePathname()}/</p>
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}