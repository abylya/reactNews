import formatTimeAgo from "../../helps/formatTimeAgo";
import Imag from "../imag/Imag";
import styles from "./styles.module.css";
export default function NewsBanner({ news }) {
  //console.log(item);
  if (news) {
    return (
      <div className={styles.news}>
        <div className={styles.news_img_block}>
          <Imag imgSrc={news.image} imgClass="smoll_img_block"></Imag>
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>{news.title}</h4>

          <footer className={styles.footer}>
            <time dateTime={news.published}>
              {formatTimeAgo(news.published) + " "}
            </time>
            Автор: <cite>{news.author || "anonim"}</cite>
          </footer>
        </div>
      </div>
    );
  } else {
    <div div className={styles.newsbanner}>
      <h3 className={styles.title}>no content</h3>
    </div>;
  }
}
