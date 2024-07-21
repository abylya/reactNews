import { getCatigorys } from "../../api/getCatigorys";
import { getNews } from "../../api/newsApi";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constants";
import usDebounce from "../../helps/usDebounce";
import { useFetch } from "../../helps/useFetch";
import { usFilter } from "../../helps/usFilter";
import Catigorys from "../catigorys/Catigorys";
import { CatigoriysType } from "../interfeces";
import NewsList from "../newsList/NewsList";
import PginationWraper from "../paginationWraper/PaginationWraper";
import Search from "../serch/Search";
import Slider from "../slider/Slider";
import styles from "./styles.module.css";



export default function FilterNews() {
  const { filter, chengFilter } = usFilter({
    page_number: 1,
    catigory:'All',
    page_size:10,
    keywords: '',
  });

  const debounceKeywords = usDebounce(filter.keywords, 2000);
  //console.log(debounceKeywords);

  let { data, isLoading } = useFetch(getNews, {
    page_number: filter.page_number,
    page_size: PAGE_SIZE,
    catigory: filter.catigory,
    keywords: debounceKeywords,
  });
  let {categories} = useFetch(getCatigorys);
  //console.log(dataCategorys);

  function handleNextPage() {
    if (filter.page_number < TOTAL_PAGE) {
      chengFilter("currenPage", filter.page_number + 1);
    }
  }

  function handlePrevPage() {
    if (filter.page_number > 1) {
      chengFilter("currenPage", filter.page_number - 1);
    }
  }
  function handlePage(pageNumber:number) {
    chengFilter("currenPage", pageNumber);
  }

  function HandleCatigory(catigory:CatigoriysType) {
    chengFilter("category", catigory);
  }
  return (
    <section className={styles.section}>
      <Search keywords={filter.keywords} setKeywords={chengFilter}></Search>

      {categories ? (
        <Slider>
          <Catigorys
            catigorys={categories}
            catigory={filter.catigory}
            HandleCatigory={HandleCatigory}
          ></Catigorys>
        </Slider>
      ) : null}

      <PginationWraper
        top
        bottom
        handlePage={handlePage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currenPage={filter.page_number}
        totalPage={TOTAL_PAGE}
      >
        <NewsList isLoading={isLoading} news={data?.news}></NewsList>
      </PginationWraper>
    </section>
  );
}
