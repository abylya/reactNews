import News from "../news/News";
import styles from "./styles.module.css";
export default function NewsList({ newsList }) {
  //console.log("news");
  return (
    <div className={styles.list}>
      {newsList.map((item) => {
        return <News key={item.id} news={item}></News>;
      })}
    </div>
  );
}
