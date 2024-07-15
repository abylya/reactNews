import News from "../news/News";
import styles from "./styles.module.css";
import withSceleton from "../../helps/hocs/withSceleton";
function NewsList({ newsList }) {
  //console.log("news");
  if (newsList) {
    return (
      <ul className={styles.list}>
        {newsList?.map((item) => {
          return (
            <li key={item.id}>
              <News news={item}></News>
            </li>
          );
        })}
      </ul>
    );
  } else {
    <div div className={styles.list}>
      <p>no content</p>
    </div>;
  }
}
const NewsListWithSkeleton = withSceleton(NewsList, 10, "colum");
export default NewsListWithSkeleton;
