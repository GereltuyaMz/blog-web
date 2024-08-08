import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const getArticleData = async () => {
    const response = await fetch(`https://dev.to/api/articles?page=${page}&per_page=20`);
    const data = await response.json();

    setArticles(prevArticles => {
      console.log("prevArticles", prevArticles)
      const newArticles = data.filter(article => !prevArticles.some(prevArticle => prevArticle.id === article.id));
      return [...prevArticles, ...newArticles];
    });
  };

  useEffect(() => {
    getArticleData();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap max-w-[1280px] m-auto gap-4">
          {articles.map((article) => (
            <Card article={article} />
          ))}
        </div>
        <button onClick={handleLoadMore}>Load More</button>
      </main>
    </>
  );
}
