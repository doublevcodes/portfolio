"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

function getPosts () {
    const posts = [
        {
            active: true,
            name: "blog post 1 here",
            slug: "blog-post-1",
        },
        {
            active: false,
            name: "blog post 2 here",
            slug: "blog-post-1",
        },
        {
            active: false,
            name: "this is the third one",
            slug: "blog-post-1",
        }
    ]
    return posts
}

export default function Blog() {
    const [index, setIndex] = useState(0);
    const posts = getPosts();
    useEffect(() => {
        const handleKeyPress = (e: { keyCode: number; }) => {
            if (e.keyCode == 38) {
                if(index > 0){setIndex(index - 1)}
            } else if (e.keyCode == 40) {
                if(index < posts.length - 1){setIndex(index + 1)}
            }
        }
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    }, [index, posts.length])
    return (
        <div className="flex flex-row w-full h-[95vh]">
            <div className="flex justify-center font-mono grow md:py-8">
                <div className="rounded-lg text-xs md:text-base max-w-full md:max-w-[60%] grow flex flex-col h-full w-fit bg-white dark:bg-black border-b md:border border-black shadow-lg hover:shadow-2xl duration-150 md:animate-slidein300 md:opacity-0">
                    <div className="relative flex flex-row items-center p-4 pb-4 border-b border-black cursor-pointer">
                        <div className="relative shrink-0 flex flex-row gap-2 *:cursor-pointer *:rounded-full *:h-4 *:w-4 *:duration-300 *:select-none">
                            <span className="bg-red-500 brightness-125 hover:bg-red-700">&nbsp;</span>
                            <span className="bg-yellow-500 brightness-125 hover:bg-yellow-700">&nbsp;</span>
                            <span className="bg-green-500 brightness-125 hover:bg-green-700">&nbsp;</span>
                        </div>
                        <p className="absolute left-1/2 -translate-x-1/2 cursor-text">vivaan ~ ls (/blogs/)</p>
                    </div>
                    <div className="p-4 overflow-scroll">
                            <h1>$ ls</h1>
                            {posts.map((obj, idx) => (
                                <div key={idx} className={`${idx === index ? "font-bold" : ""}`} onMouseEnter={() => {setIndex(idx)}}>
                                    <Link href={`/blog/${obj.slug}`} className="flex flex-row gap-2">
                                        <p className={`${idx !== index ? "text-transparent" : ""}`}>&gt;</p>
                                        <p>[{idx}]</p>
                                        <p>{obj.name}</p>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}