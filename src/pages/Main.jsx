import { useEffect, useState } from "react";
import NewsBanner from "../components/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../api/newsApi";
import NewsList from "../components/newsList/NewsList";
import Skeleton from "../components/Skeleton/Skeleton";
import Pagination from "../components/pagination/Pagination";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [currenPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const pageSize = 10;

  async function fechNews() {
    try {
      setIsLoding(true);
      const respons = await getNews(currenPage, pageSize);
      //console.log(respons.articles);
      setNews(respons.news);
      //console.log(news);
      setIsLoding(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fechNews();
  }, [currenPage]);

  function handleNextPage() {
    if (currenPage < totalPage) {
      setCurrentPage(currenPage + 1);
    }
  }

  function handlePrevPage() {
    if (currenPage > 1) {
      setCurrentPage(currenPage - 1);
    }
  }
  function handlePage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <main className={styles.main}>
      {isLoding ? (
        <Skeleton count={10}></Skeleton>
      ) : news.length > 0 ? (
        <>
          <NewsBanner item={news[0]}></NewsBanner>
          <Pagination
            handlePage={handlePage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            currenPage={currenPage}
            totalPage={totalPage}
          ></Pagination>
          <NewsList newsList={news}></NewsList>
          <Pagination
            handlePage={handlePage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            currenPage={currenPage}
            totalPage={totalPage}
          ></Pagination>
        </>
      ) : (
        <div>no content</div>
      )}
    </main>
  );
};

export default Main;
