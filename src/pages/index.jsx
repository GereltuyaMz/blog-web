import Card from "@/components/Card";
import { useMyContext } from "@/provider/provider";
import Loader from "@/components/Loader";
import Carousel from "@/components/carousel";
import { useState } from "react";

const slides = ["bg-blue-400", "bg-teal-400", "bg-violet-400", "bg-orange-400"];

export default function HomePage() {
  const { searchValue, articles, isLoading } = useMyContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="w-2/3 pt-10 m-auto overflow-hidden bg-red-300 h-80">
          {/* Carousel */}
          <Carousel slides={slides} currentIndex={currentIndex} />
        </div>
        <div className="flex justify-between w-2/3 mt-2">
          <button
            className="px-4 py-3 border rounded-xl"
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
          >
            Prev
          </button>
          <button
            className="px-4 py-3 border rounded-xl"
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
          >
            Next
          </button>
        </div>

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
