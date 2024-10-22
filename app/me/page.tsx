import Image from "next/image"
import faceLeft from "@/public/face_final.png"

export default function Me() {
    return (
        <div className="flex flex-row w-full h-[95vh]">
            <div className="flex py-14 px-14 font-mono grow justify-center">
                <div className="min-w-[60%] flex flex-col h-full w-fit">
                    <h1>$ whoami</h1>
                    <p>
                        &gt; <span className="font-bold">Name: </span> Vivaan Verma
                    </p>
                    <p>
                        &gt; <span className="font-bold">Age: </span> 16
                    </p>
                </div>
            </div>
        </div>
    )
}