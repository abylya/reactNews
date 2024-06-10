import formatTimeAgo from "../../helps/formatTimeAgo";
import Imag from "../imag/Imag";
import styles from "./styles.module.css";
export default function News({news}) {
  return (
    <div className={styles.news}>
      <div className={styles.news_img_block}>
        <Imag imgSrc={news.image} imgClass='smoll_img_block'></Imag>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{news.title}</h4>

        <footer className={styles.footer}>
          <time dateTime={news.publish_date}>
            {formatTimeAgo(news.publish_date)+" "}
          </time>
          Автор: <cite>{news.author || "anonim"}</cite>
        </footer>
      </div>
    </div>
  );
}
