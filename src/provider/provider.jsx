import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/artic?page=${page}&per_page=20`
      );
      const data = await response.json();

      setArticles((prevArticles) => {
        console.log("prevArticles", prevArticles);
        const newArticles = data.filter(
          (article) =>
            !prevArticles.some((prevArticle) => prevArticle.id === article.id)
        );
        return [...prevArticles, ...newArticles];
      });
      setIsLoading(false);
    } catch (error) {
      console.log("er", error);
      setIsLoading(false);
      toast.success("Алдаа гарлаа. Та дахин оролдоно уу");
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getArticleData();
  }, [page]);

  return (
    <MyContext.Provider
      value={{ searchValue, setSearchValue, articles, isLoading }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
