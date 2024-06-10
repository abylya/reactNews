import formatTimeAgo from "../../helps/formatTimeAgo";
import Imag from "../imag/Imag";
import styles from "./styles.module.css";
export default function NewsBanner({ item }) {
  //console.log(item);
  return (
    <div className={styles.newsbanner}>
      <Imag imgSrc={item?.image}></Imag>

      <h3 className={styles.title}>{item.title}</h3>

      <footer className={styles.footer}>
        <time dateTime={item.publish_date}>
          {formatTimeAgo(item.publish_date)+" "}
        </time>
          Автор: <cite>{item.author || "anonim"}</cite>
      </footer>
    </div>
  );
}
