import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import ArticleList from "./components/ArticleList.jsx";

export default function App() {
  return(
    <div>
      <Header name="My New Blog"/>
      <About image="https://cdn.pixabay.com/photo/2022/01/16/17/24/wordpress-6942722_1280.png" about="This is a personal blog documenting my personal and professional life"/>
      <ArticleList />
    </div>
  )
}