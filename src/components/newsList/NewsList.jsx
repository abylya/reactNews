import News from "../news/News";
import styles from "./styles.module.css";
import NewsBannerWithSkeleton from "./../newsBanner/NewsBanner";
import withSceleton from "../../helps/hocs/withSceleton";
function NewsList({ newsList }) {
  //console.log("news");
  if (newsList) {
    return (
      <div className={styles.list}>
        {newsList?.map((item) => {
          return <News key={item.id} news={item}></News>;
        })}
      </div>
    );
  } else {
    <div div className={styles.list}>
      <p>no content</p>
    </div>;
  }
}
const NewsListWithSkeleton = withSceleton(NewsList, "item", 10);
export default NewsListWithSkeleton;
