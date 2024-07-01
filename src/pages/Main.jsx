import { useEffect, useState } from "react";
import NewsBanner from "../components/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../api/newsApi";
import { getCatigorys } from "../api/getCatigorys";
import NewsList from "../components/newsList/NewsList";
import Skeleton from "../components/Skeleton/Skeleton";
import Pagination from "../components/pagination/Pagination";
import Catigorys from "../components/catigorys/Catigorys";
import Search from "../components/serch/Search";
import usDebounce from "../helps/usDebounce";
//import Catigories from "./../components/catigories/Catigories";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [currenPage, setCurrentPage] = useState(1);
  const [catigorys, setCatigorys] = useState(["All"]);
  const [currentCatigor, setCurrentCatigor] = useState("All");
  const [keywords, setKeywords] = useState("");

  const totalPage = 10;
  const pageSize = 10;

  const debounceKeywords = usDebounce(keywords, 2000);
  //console.log(debounceKeywords);
  async function fechNews() {
    try {
      setIsLoding(true);

      const respons = await getNews({
        currenPage: currenPage,
        pageSize: pageSize,
        category: currentCatigor === "All" ? null : currentCatigor,
        keywords: debounceKeywords,
      });
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
  }, [currenPage, currentCatigor, debounceKeywords]);

  async function fechCategorys() {
    try {
      const respons = await getCatigorys();
      //console.log(respons.articles);
      setCatigorys(["All", ...respons.categories]);
      //console.log(news);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fechCategorys();
  }, []);

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

  function HandleCatigory(catigory) {
    setCurrentCatigor(catigory);
  }

  return (
    <main className={styles.main}>
      {isLoding ? (
        <Skeleton count={10}></Skeleton>
      ) : (
        <>
          <Search keywords={keywords} setKeywords={setKeywords}></Search>
          <Catigorys
            catigorys={catigorys}
            catigory={currentCatigor}
            HandleCatigory={HandleCatigory}
          ></Catigorys>
          <NewsBanner item={news.length > 0 ? news[0] : null}> </NewsBanner>
          {news.length > 0 ? (
            <Pagination
              handlePage={handlePage}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              currenPage={currenPage}
              totalPage={totalPage}
            ></Pagination>
          ) : null}
          {news.length > 0 ? <NewsList newsList={news}></NewsList> : null}
          {news.length > 0 ? (
            <Pagination
              handlePage={handlePage}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              currenPage={currenPage}
              totalPage={totalPage}
            ></Pagination>
          ) : null}
        </>
      )}
    </main>
  );
};

export default Main;
