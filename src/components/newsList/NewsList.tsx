import News from "../news/News";
import styles from "./styles.module.css";
import withSceleton from "../../helps/hocs/withSceleton";
import { INews } from "../interfeces";
interface Prop{
  news?:INews[]|null;
}
function NewsList({ news}:Prop) {
  //console.log("news");
  
    return (
      <ul className={styles.list}>
        {news?.map((item) => {
          return (
            <li key={item.id}>
              <News news={item}></News>
            </li>
          );
        })}
      </ul>
    );

  
  
}
const NewsListWithSkeleton = withSceleton<Prop>(NewsList, 10, "colum");
export default NewsListWithSkeleton;
