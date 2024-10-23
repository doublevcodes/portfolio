export default function Card({name}) {
    return (
        <div className="flex flex-col bg-gray-400 bg-opacity-30 border border-black">
            <div className="flex flex-row relative items-center p-2  border-black border-b">
                <div className="relative shrink-0 flex flex-row gap-2 *:cursor-pointer *:rounded-full *:h-4 *:w-4 *:duration-300 *:select-none">
                    <span className="bg-red-500 hover:bg-red-700">&nbsp;</span>
                    <span className="bg-yellow-500 hover:bg-yellow-700">&nbsp;</span>
                    <span className="bg-green-500 hover:bg-green-700">&nbsp;</span>
                </div>
                <p className="text-sm absolute left-1/2 -translate-x-1/2 font-mono">vivaanverma ~ blog</p>
            </div>
            <div className="flex flex-col p-2 gap-1">
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="text-sm">then we have a little description</p>
            </div>
        </div>
    )
}