import Link from "next/link";
import Header from "@/app/components/header";
import Window from "@/app/components/window";

export default function Me() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header></Header>
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="flex flex-row flex-1 w-full h-full">
                    <div className="flex justify-center font-mono md:py-8 grow">
                        <Window>
                            <div className="p-4">
                                
                                <h1>$ whoami</h1>
                                <p>&gt; <span className="font-bold">Name: </span> Vivaan Verma</p>
                                <p>&gt; <span className="font-bold">Age: </span> 16</p>
                                <p>&gt; <span className="font-bold">Location: </span> London, UK</p>
                                
                                <p>&nbsp;</p>
                                
                                <div>
                                    <p>&gt; <span className="font-bold">Education: </span></p>
                                    <div className="flex flex-col gap-1 pt-1 pl-[2ex]">
                                        <div className="flex flex-row">
                                            <p className="pl-1 pr-2">-</p>
                                            <p> Currently studying
                                                <span className="font-semibold"> Maths</span>, 
                                                <span className="font-semibold"> Further Maths</span>, 
                                                <span className="font-semibold"> Physics</span>,
                                                <span className="font-semibold"> Computer Science</span> and
                                                <span className="font-semibold"> Design and Technology </span>
                                                A-Level at
                                                <span>
                                                    <span> </span>
                                                    <Link
                                                        href="https://wilsons.school/"
                                                        className="text-blue-700 underline"
                                                    >
                                                        Wilson&apos;s School
                                                    </Link>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="pl-1 pr-2">-</p>
                                            <p> Achieved <span className="font-bold">straight 9s in GCSEs</span> (2024)</p>
                                        </div>
                                     </div>
                                </div>
                                
                                <p>&nbsp;</p>
                                
                                <div>
                                    <p>&gt; <span className="font-bold">Interests: </span></p>
                                    <div className="flex flex-col gap-1 pt-1 pl-[2ex]">
                                        <div className="flex flex-row">
                                            <p className="pl-1 pr-2">-</p>
                                            <p>
                                                <span className="font-semibold">Astrophysics </span>
                                                and
                                                <span className="font-semibold"> quantum physics</span>
                                            </p>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="pl-1 pr-2">-</p>
                                            <p>
                                                <span className="font-semibold">Quantum computing </span>
                                                and
                                                <span className="font-semibold"> AI ethics</span>
                                            </p>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="pl-1 pr-2">-</p>
                                            <p>
                                                <span className="font-semibold">Electronic engineering</span>,
                                                <span className="font-semibold"> tinkering </span>
                                                and
                                                <span className="font-semibold"> software development</span>
                                            </p>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="pl-1 pr-2">-</p>
                                            <p>
                                                <span className="font-semibold">Fighter jets </span>
                                                and
                                                <span className="font-semibold"> aerospace engineering</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <p>&nbsp;</p>
                                
                                <div>
                                    <p>&gt; <span className="font-bold">Skills: </span></p>
                                    <div className="flex flex-col gap-1 pt-1 pl-[2ex]">
                                        <div className="flex flex-row">
                                            <p className="pl-1 pr-2">-</p>
                                            <p>
                                                <span className="font-semibold"> Python</span>,
                                                <span className="font-semibold"> web development </span>
                                                and
                                                <span className="font-semibold"> DevOps</span></p>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="pl-1 pr-2">-</p>
                                            <p>
                                                <span className="font-semibold">Maths </span>
                                                and
                                                <span className="font-semibold"> physics problem-solving</span>
                                            </p>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="pl-1 pr-2">-</p>
                                            <p>
                                                <span className="font-semibold">Design </span>
                                                with
                                                <span className="font-semibold"> CAD </span>
                                                alongside
                                                <span className="font-semibold"> electronics</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Window>   
                    </div>
                </div>
            </div>
        </div>
    )
}
