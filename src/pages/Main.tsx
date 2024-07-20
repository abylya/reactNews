import styles from "./styles.module.css";
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
