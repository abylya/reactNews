import axios from "axios";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_BASE = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getNews = async ({
  currenPage = 1,
  pageSize = 10,
  category,
  keywords,
}) => {
  try {
    const respons = await axios.get(`${API_BASE}search`, {
      params: {
        languages: "us",
        category: category,
        page_number: currenPage,
        page_size: pageSize,
        apiKey: API_KEY,
        keywords: keywords,
      },
    });
    //console.log(respons.data);
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLatesNews = async () => {
  try {
    const respons = await axios.get(`${API_BASE}latest-news`, {
      params: {
        languages: "us",
        apiKey: API_KEY,
      },
    });
    //console.log(respons.data);
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};
