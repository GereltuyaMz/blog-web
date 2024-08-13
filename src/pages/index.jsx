import { useContext, useEffect, useState } from "react";
import Card from "@/components/Card";
import { MyContext } from "@/provider/provider";
import Loader from "@/components/Loader";

export default function HomePage() {
  const { searchValue, articles, isLoading } = useContext(MyContext);

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <h2>Хайлт: {searchValue}</h2>
        <div className="flex flex-wrap max-w-[1280px] m-auto gap-4">
          {isLoading ? (
            <Loader />
          ) : (
            articles.map((article) => (
              <Card key={article.id} article={article} />
            ))
          )}
        </div>
        <button>Load More</button>
      </main>
    </>
  );
}
