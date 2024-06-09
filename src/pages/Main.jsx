import { useEffect, useState } from "react";
import NewsBanner from "../components/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../api/newsApi";
import NewsList from "../components/newsList/NewsList";



const Main = () => {
  const [news, setNews] = useState([]);
  useEffect( () => {
    async function fechNews() {
    try {
      
        const respons = await getNews();
        //console.log(respons.articles);
        setNews(respons.news);
        //console.log(news);
      
    } catch (error) {
      console.log(error);
    }
  }
    fechNews();

  }, []);
  
  return (
    <main className={styles.main}>
      {news.length>0 ? <NewsBanner item={news[0]}></NewsBanner>:null}
      <NewsList newsList={news}></NewsList>
    </main>
  );
};

export default Main;
