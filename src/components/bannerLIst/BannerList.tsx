import NewsBanner from "../newsBanner/NewsBanner";
import styles from "./styles.module.css";
import withSceleton from "../../helps/hocs/withSceleton";
import { INews } from "../interfeces";
interface Props{
  newsList?:INews[]|null;
}
function BannerList({ newsList }:Props) {
  return (
    <ul className={styles.list}>
      {newsList?.map((banner) => {
        return (
          <li key={banner.id} className={styles.item}>
            <NewsBanner news={banner}></NewsBanner>
          </li>
        );
      })}
    </ul>
  );
}
const BannerListWithSkeleton = withSceleton<Props>(BannerList, 10, "row");
export default BannerListWithSkeleton;
