import Card from "../components/blog_card"

export default function Blog() {
    return (
        <div className="flex flex-col w-full">
            <div className="border-b border-black h-10 flex flex-col items-start justify-center bg-white peer-focus:border-b-0">
                <p className="text-sm p-2">Here, I write about whatever interests me.</p>
            </div>
            <input
                type="text"
                placeholder="search here..."
                className="text-sm h-10 p-2 font-mono border-b border-black focus:outline-none focus:border-b-2"
                style={{caretShape: "block"}}
            />
            <div className="grid">
                <div className="m-3">
                    <Card name="Title of the blog post goes here"/>
                </div>
            </div>
        </div>
    )
}