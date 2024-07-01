import axios from "axios";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_CATIGORYS = import.meta.env.VITE_NEWS_BASE_API_URL;
export const getCatigorys = async () => {
  try {
    const respons = await axios.get(API_CATIGORYS + "available/categories", {
      params: {
        apiKey: API_KEY,
      },
    });
    //console.log(respons.data);
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};
