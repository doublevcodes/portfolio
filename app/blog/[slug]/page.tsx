import Link from "next/link";

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
    const slug = (await params).slug;
    return (
        <div className="rounded-lg font-mono text-xs md:text-base max-w-full md:max-w-[60%] grow flex flex-col h-full w-fit bg-white dark:bg-black border-b md:border border-black shadow-lg hover:shadow-2xl duration-150 md:animate-slidein300 md:opacity-0">
            <div className="relative flex flex-row items-center p-4 pb-4 border-b border-black cursor-pointer">
                <div className="relative shrink-0 flex flex-row gap-2 *:cursor-pointer *:rounded-full *:h-4 *:w-4 *:duration-300 *:select-none">
                    <span className="bg-red-500 brightness-125 hover:bg-red-700">&nbsp;</span>
                    <span className="bg-yellow-500 brightness-125 hover:bg-yellow-700">&nbsp;</span>
                    <span className="bg-green-500 brightness-125 hover:bg-green-700">&nbsp;</span>
                </div>
                <p className="absolute left-1/2 -translate-x-1/2 cursor-text">{`vivaan ~ cat ${slug}`}</p>
            </div>
            <div className="p-4 overflow-scroll">
                    <h1>$ whoami</h1>
                <p>
                    &gt; <span className="font-bold">Name: </span> Vivaan Verma
                </p>
                <p>
                    &gt; <span className="font-bold">Age: </span> 16
                </p>
                <p>
                    &gt; <span className="font-bold">Location: </span> London, UK
                </p>
                <p>&nbsp;</p>
                <div>
                    <p>&gt; <span className="font-bold">Education: </span></p>
                    <div className="flex flex-col gap-1 pt-1 pl-[2ex]">
                        <div className="flex flex-row">
                            <p className="pl-1 pr-2">-</p>
                            <p> Currently studying <span className="font-semibold">Maths</span>, 
                            <span className="font-semibold"> Further Maths</span>, 
                            <span className="font-semibold"> Physics</span>,
                            <span className="font-semibold"> Computer Science</span> and
                            <span className="font-semibold"> Design and Technology </span>
                            A-Level at <span className="text-blue-700 underline"><Link href="https://wilsons.school/">Wilson&apos;s School</Link></span>
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <p className="pl-1 pr-2">-</p>
                            <p> Achieved <span className="font-bold">straight 9s in GCSEs</span> (2024)
                            </p>
                        </div>
                    </div>
                </div>
                <p>&nbsp;</p>
                <div>
                    <p>&gt; <span className="font-bold">Interests: </span></p>
                    <div className="flex flex-col gap-1 pt-1 pl-[2ex]">
                        <div className="flex flex-row">
                            <p className="pl-1 pr-2">-</p>
                            <p><span className="font-semibold">Astrophysics</span> and <span className="font-semibold">quantum physics</span></p>
                        </div>
                        <div className="flex flex-row">
                            <p className="pl-1 pr-2">-</p>
                            <p><span className="font-semibold">Quantum computing</span> and <span className="font-semibold">AI ethics</span></p>
                        </div>
                        <div className="flex flex-row">
                            <p className="pl-1 pr-2">-</p>
                            <p><span className="font-semibold">Electronic engineering</span>, <span className="font-semibold">tinkering</span> and <span className="font-semibold">software development</span></p>
                        </div>
                        <div className="flex flex-row">
                            <p className="pl-1 pr-2">-</p>
                            <p><span className="font-semibold">Fighter jets</span> and <span className="font-semibold">aerospace engineering</span></p>
                        </div>
                    </div>
                </div>
                <p>&nbsp;</p>
                <div>
                    <p>&gt; <span className="font-bold">Skills: </span></p>
                    <div className="flex flex-col gap-1 pt-1 pl-[2ex]">
                        <div className="flex flex-row">
                            <p className="pl-1 pr-2">-</p>
                            <p><span className="font-semibold"> Python</span>, <span className="font-semibold">web development</span> and <span className="font-semibold">DevOps</span></p>
                        </div>
                        <div className="flex flex-row">
                            <p className="pl-1 pr-2">-</p>
                            <p><span className="font-semibold">Maths </span>and<span className="font-semibold"> physics problem-solving</span></p>
                        </div>
                        <div className="flex flex-row">
                            <p className="pl-1 pr-2">-</p>
                            <p><span className="font-semibold">Design </span>with<span className="font-semibold"> CAD </span>alongside <span className="font-semibold">electronics</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

