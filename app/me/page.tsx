import Link from "next/link";

export default function Me() {
    return (
        <div className="flex flex-row w-full h-[95vh]">
            <div className="flex font-mono grow justify-center md:py-8">
                <div className="text-xs md:text-base max-w-full md:max-w-[60%] flex flex-col h-full w-fit bg-gray-400 dark:bg-black bg-opacity-30 border-b md:border border-black drop-shadow-2xl md:animate-slidein300 md:opacity-0">
                    <div className="flex flex-row gap-2 justify-start items-center pb-4 *:cursor-pointer p-4 *:rounded-full *:h-4 *:w-4 *:duration-300 *:select-none border-black border-b">
                        <span className="bg-red-500 hover:bg-red-700">&nbsp;</span>
                        <span className="bg-yellow-500 hover:bg-yellow-700">&nbsp;</span>
                        <span className="bg-green-500 hover:bg-green-700">&nbsp;</span>
                    </div>
                    <div className="p-4">
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
                                    <p> Achieved <span className="font-bold">straight 9s in 2024 GCSEs</span>
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
                    </div>
                </div>
            </div>
        </div>
    )
}