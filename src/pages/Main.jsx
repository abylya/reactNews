import { useEffect, useState } from "react";
import NewsBanner from "../components/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../api/newsApi";
import NewsList from "../components/newsList/NewsList";
import Skeleton from "../components/Skeleton/Skeleton";



const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoding,setIsLoding]=useState(true);
  useEffect( () => {
    async function fechNews() {
    try {
        setIsLoding(true);
        const respons = await getNews();
        //console.log(respons.articles);
        setNews(respons.news);
        //console.log(news);
      setIsLoding(false);
    } catch (error) {
      console.log(error);
    }
  }
    fechNews();

  }, []);
  
  return (
    <main className={styles.main}>
      {isLoding? <Skeleton count={10} ></Skeleton>:
      news.length>0 ?
      <>
       <NewsBanner item={news[0]}></NewsBanner>
      <NewsList newsList={news}></NewsList>
      </>:
      <div>no content</div>}
    </main>
  );
};

export default Main;
