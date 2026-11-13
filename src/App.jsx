import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import ArticleList from "./components/ArticleList.jsx";

export default function App() {
  const posts = [
    {
    id: 1,
    title: "Getting Started with React",
    date: "2026-01-12",
    preview: "A beginner-friendly walkthrough of components, props, and state, and how they fit together.",
  },
  {
    id: 2,
    title: "Understanding Closures in JavaScript",
    date: "2026-02-03",
    preview: "Closures let a function remember variables from its outer scope. Here's how that powers patterns like counters and login trackers.",
  },
  {
    id: 3,
    title: "CSS Flexbox vs Grid",
    date: "2026-02-20",
    preview: "When to reach for flexbox, when grid is the better tool, and how to combine them in one layout.",
  },
  {
    id: 4,
    title: "Building a Dark Themed Portfolio",
    date: "2026-03-08",
    preview: "Picking a palette, using CSS variables, and keeping a minimalist design consistent across sections.",
  },
  {
    id: 5,
    title: "Tailwind CSS Tips for Beginners",
    date: "2026-03-27",
    preview: "Utility classes, responsive prefixes, and a few habits that keep your JSX readable.",
  },
  ]
  return(
    <div className="">
      <Header name="My New Blog"/>
      <div className="flex min-h-screen">
        <About image="https://cdn.pixabay.com/photo/2022/01/16/17/24/wordpress-6942722_1280.png" about="This is a personal blog documenting my personal and professional life"/>
        <ArticleList posts={posts} />
      </div>
    </div>
  )
}