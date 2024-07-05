import { useEffect, useState } from "react";
import NewsBanner from "../components/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../api/newsApi";
import { getCatigorys } from "../api/getCatigorys";
import NewsList from "../components/newsList/NewsList";
import Pagination from "../components/pagination/Pagination";
import Catigorys from "../components/catigorys/Catigorys";
import Search from "../components/serch/Search";
import usDebounce from "../helps/usDebounce";
import { PAGE_SIZE, TOTAL_PAGE } from "../constants/constants.";
import { useFetch } from "../helps/useFetch";
import { usFilter } from "../helps/usFilter";

const Main = () => {
  const { filter, chengFilter } = usFilter({
    currenPage: 1,
    category: null,
    keywords: null,
  });

  const debounceKeywords = usDebounce(filter.keywords, 2000);
  //console.log(debounceKeywords);

  let { data, isLoding } = useFetch(getNews, {
    currenPage: filter.currenPage,
    pageSize: PAGE_SIZE,
    category: filter.category,
    keywords: debounceKeywords,
  });

  let { data: dataCategorys } = useFetch(getCatigorys);
  //console.log(dataCategorys);

  function handleNextPage() {
    if (filter.currenPage < TOTAL_PAGE) {
      chengFilter("currenPage", filter.currenPage + 1);
    }
  }

  function handlePrevPage() {
    if (filter.currenPage > 1) {
      chengFilter("currenPage", filter.currenPage - 1);
    }
  }
  function handlePage(pageNumber) {
    chengFilter("currenPage", pageNumber);
  }

  function HandleCatigory(catigory) {
    chengFilter("category", catigory);
  }

  return (
    <main className={styles.main}>
      <>
        <Search keywords={filter.keywords} setKeywords={chengFilter}></Search>
        {dataCategorys ? (
          <Catigorys
            catigorys={dataCategorys?.categories}
            catigory={filter.category}
            HandleCatigory={HandleCatigory}
          ></Catigorys>
        ) : null}
        <NewsBanner
          isLoding={isLoding}
          item={data && data.news && data.news[0]}
        ></NewsBanner>

        <Pagination
          handlePage={handlePage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          currenPage={filter.currenPage}
          totalPage={TOTAL_PAGE}
        ></Pagination>

        <NewsList isLoding={isLoding} newsList={data?.news}></NewsList>

        <Pagination
          handlePage={handlePage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          currenPage={filter.currenPage}
          totalPage={TOTAL_PAGE}
        ></Pagination>
      </>
    </main>
  );
};

export default Main;
