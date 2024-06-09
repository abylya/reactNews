import axios from "axios";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_BASE = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getNews = async () => {
  try {
    
     const respons = await axios.get(
        API_BASE, {
      params: {
        ['source-countries']: "us",
        text:'Sport',
        //[sort-direction]:'ASC',
        ['earliest-publish-date']:'2024-05-01',
        //language:'en',
        //sources:'New York Post',
        //catgory:'sport',
        number: "10",
        ['api-key']: API_KEY,
      }
   }
);
    console.log(respons.data);
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};
