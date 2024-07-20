import axios from "axios";
import { NewsApiResponse, ParamsType } from "../components/interfeces";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_BASE = import.meta.env.VITE_NEWS_BASE_API_URL;
enum Status{
  Error='error',
  Ok='ok'
}
export const getNews = async (params?:ParamsType):Promise<NewsApiResponse> => {
  const {
    page_number = 1,
    page_size = 10,
    catigory,
    keywords,
  }=params||{};
  try {
    const respons = await axios.get<NewsApiResponse> (`${API_BASE}search`, {
      params: {
        languages: "us",
        category: catigory,
        page_number: page_number,
        page_size: page_size,
        apiKey: API_KEY,
        keywords: keywords,
      },
    });
    //console.log(respons.data);
    return respons.data;
  } catch (error) {
    console.log(error);
    return {news:[],page:1,status:Status.Error}
  }
};

export const getLatesNews = async ():Promise<NewsApiResponse>=> {
  try {
    const respons = await axios.get<NewsApiResponse> (`${API_BASE}latest-news`, {
      params: {
        languages: "us",
        page_size: 20,
        apiKey: API_KEY,
      },
    });
    //console.log(respons.data);
    return respons.data;
  } catch (error) {
    console.log(error);
    return {news:[],page:1,status:Status.Error}
  }
};
