import { getCatigorys } from "../../api/getCatigorys";
import { getNews } from "../../api/newsApi";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constants.";
import usDebounce from "../../helps/usDebounce";
import { useFetch } from "../../helps/useFetch";
import { usFilter } from "../../helps/usFilter";
import Catigorys from "../catigorys/Catigorys";
import NewsList from "../newsList/NewsList";
import PginationWraper from "../paginationWraper/PaginationWraper";
import Search from "../serch/Search";
import styles from "./styles.module.css";

export default function FilterNews() {
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
    <section className={styles.section}>
      <Search keywords={filter.keywords} setKeywords={chengFilter}></Search>
      {dataCategorys ? (
        <Catigorys
          catigorys={dataCategorys?.categories}
          catigory={filter.category}
          HandleCatigory={HandleCatigory}
        ></Catigorys>
      ) : null}

      <PginationWraper
        top
        bottom
        handlePage={handlePage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currenPage={filter.currenPage}
        totalPage={TOTAL_PAGE}
      >
        <NewsList isLoading={isLoading} newsList={data && data.news}></NewsList>
      </PginationWraper>
    </section>
  );
}
