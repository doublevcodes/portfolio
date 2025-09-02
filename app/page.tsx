import Header from "@/app/components/header";

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center flex-1 gap-4">
                <h1 className="font-sans text-5xl font-normal tracking-tight text-center text-black opacity-0 md:text-9xl dark:text-white animate-slidein300">
                    Vivaan Verma
                </h1>
                <h2 className="px-6 text-sm font-light tracking-tighter text-center uppercase opacity-0 text-slate-800 md:text-lg dark:text-gray-300 animate-slidein500">17 year old student passionate about physics and tech</h2>
            </div>
        </div>
    );
}
