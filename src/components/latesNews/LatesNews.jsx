import styles from "./styles.module.css";
import BannerList from "../bannerLIst/BannerList";
export default function LatesNews({ newsList, isLoading }) {
  return (
    <section className={styles.section}>
      <BannerList newsList={newsList} isLoading={isLoading}></BannerList>
    </section>
  );
}
