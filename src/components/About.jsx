export default function About({ image, about }) {
    return (
        <div>
            <aside className="flex flex-col items-center text-center gap-4 w-54 h-screen p-4 shrink-0 border-r border-gray-500 shadow-sm">
                <img
                    src={image}
                    alt="blog logo"
                    className="h-20 w-20 rounded-full object-cover border border-gray-300"
                 />
                 <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">About</h2>
                    <p className="text-sm leading-relaxed text-gray-600">
                        {about}
                    </p>
                 </div>
            </aside>
        </div>
    )
}