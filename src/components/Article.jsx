export default function Article({ title, date, preview }) {
    return (
        <div>
            <article className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg shadow-sm">        
                <h3 className="text-xl font-semibold">{title}</h3>
                <small className="text-gray-500">{date}</small>
                <p className="text-gray-700 leading-relaxed ">{preview}</p>
            </article>
        </div>
    )
}