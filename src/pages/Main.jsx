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
import LatesNews from "../components/latesNews/LatesNews";
import FilterNews from "../components/filterNews/FilterNews";

const Main = () => {
  const { filter, chengFilter } = usFilter({
    currenPage: 1,
    category: null,
    keywords: null,
  });

  const debounceKeywords = usDebounce(filter.keywords, 2000);
  //console.log(debounceKeywords);

  let { data, isLoading } = useFetch(getNews, {
    currenPage: filter.currenPage,
    pageSize: PAGE_SIZE,
    category: filter.category,
    keywords: debounceKeywords,
  });

  return (
    <main className={styles.main}>
      <>
        <LatesNews isLoading={isLoading} newsList={data?.news}></LatesNews>
        <FilterNews
          filter={filter}
          chengFilter={chengFilter}
          isLoading={isLoading}
          newsList={data?.news}
        ></FilterNews>
      </>
    </main>
  );
};

export default Main;
