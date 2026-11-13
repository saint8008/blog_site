import Article from './Article.jsx'

export default function ArticleList({ posts }) {
    return(
        <div>
            <main className="flex-1 p-6 flex flex-col gap-6">
                {posts.map((post) => (
                    <Article key={post.id} {...post}/>
                ))}
            </main>
        </div>
    )
}