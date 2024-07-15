import { getCatigorys } from "../../api/getCatigorys";
import { TOTAL_PAGE } from "../../constants/constants.";
import { useFetch } from "../../helps/useFetch";
import Catigorys from "../catigorys/Catigorys";
import NewsList from "../newsList/NewsList";
import Pagination from "../pagination/Pagination";
import Search from "../serch/Search";
import styles from "./styles.module.css";

export default function FilterNews({
  filter,
  chengFilter,
  isLoading,
  newsList,
}) {
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

      <Pagination
        handlePage={handlePage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currenPage={filter.currenPage}
        totalPage={TOTAL_PAGE}
      ></Pagination>
      <NewsList isLoading={isLoading} newsList={newsList}></NewsList>
      <Pagination
        handlePage={handlePage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currenPage={filter.currenPage}
        totalPage={TOTAL_PAGE}
      ></Pagination>
    </section>
  );
}
