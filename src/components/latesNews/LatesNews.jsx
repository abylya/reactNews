import styles from "./styles.module.css";
import BannerList from "../bannerLIst/BannerList";
import { getLatesNews } from "../../api/newsApi";
import { useFetch } from "../../helps/useFetch";
export default function LatesNews() {
  let { data, isLoading } = useFetch(getLatesNews);
  return (
    <section className={styles.section}>
      <BannerList
        newsList={data && data.news}
        isLoading={isLoading}
      ></BannerList>
    </section>
  );
}
