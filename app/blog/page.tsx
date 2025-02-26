"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import Header from "@/app/components/header"
import Window from "@/app/components/window"

interface Post {
    slug: string,
    title: string,
    publishDate: string,
}

function getPosts(): Post[] {
    return [
        {
            slug: "qc-regulation",
            title: "The Case for Global Quantum Computing Governance",
            publishDate: "iesojfewif"
        },
    ]
}

export default function Blog() {
    const [index, setIndex] = useState(0);
    const posts = getPosts()
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
        <div className="flex flex-col w-full min-h-screen">
            <Header></Header>
            <div className="flex flex-col flex-1 justify-center items-center">
                <div className="flex flex-row flex-1 w-full h-full">
                    <div className="flex flex-1 justify-center md:py-8 font-mono">
                        <Window dir="blog">
                            <div className="p-4 overflow-scroll">
                                    <h1>$ ls</h1>
                                    {posts.map((obj, idx) => (
                                        <div key={idx} className={`${idx === index ? "font-bold" : ""}`} onMouseEnter={() => {setIndex(idx)}}>
                                            <Link href={`/blog/${obj.slug}`} className="flex flex-row gap-2">
                                                <p className={`${idx !== index ? "text-transparent" : ""}`}>&gt;</p>
                                                <p>[{idx}]</p>
                                                <p>{obj.title}</p>
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                        </Window>
                    </div>
                </div>
            </div>
        </div>
    )
}