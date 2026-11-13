import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import ArticleList from "./components/ArticleList.jsx";

export default function App() {
  return(
    <div>
      <Header name="My New Blog"/>
      <About />
      <ArticleList />
    </div>
  )
}