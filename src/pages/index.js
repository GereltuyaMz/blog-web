import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  console.log("HOME FUNCTION");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();
    setArticles(data);
    console.log("DOWNLOADED DATA");
  };

  useEffect(() => {
    console.log("EFFECT");
    getArticleData();
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap max-w-[1280px] m-auto gap-4">
          {articles.map((article) => (
            <Card article={article} />
          ))}
        </div>
        <button onClick={() => setCount(count + 1)}>Load More</button>
      </main>
    </>
  );
}
