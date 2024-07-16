import styles from "./styles.module.css";
import { getNews } from "../api/newsApi";
import usDebounce from "../helps/usDebounce";
import { PAGE_SIZE } from "../constants/constants.";
import { useFetch } from "../helps/useFetch";
import { usFilter } from "../helps/usFilter";
import LatesNews from "../components/latesNews/LatesNews";
import FilterNews from "../components/filterNews/FilterNews";

const Main = () => {
  return (
    <main className={styles.main}>
      <>
        <LatesNews></LatesNews>
        <FilterNews></FilterNews>
      </>
    </main>
  );
};

export default Main;
