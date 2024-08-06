import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [articles, setArticles] = useState([])

  const getArticleData = async () => {
    const response = await fetch('https://dev.to/api/articles');
    const data = await response.json();
    setArticles(data)
    // console.log("data", data)
  }

  useEffect(() => {
    getArticleData();
  }, [])

  console.log("articles", articles)
  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <div>
          {articles.map((article) => {
            console.log("article", article)
            return (
              <Card title={article.title} />
            )
          })}
        </div>
        <p>Main Content</p>
      </main>
    </>
  );
}
