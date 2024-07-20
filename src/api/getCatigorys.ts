import axios from "axios";
import { CatigorysApiResponse } from "../components/interfeces";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_CATIGORYS = import.meta.env.VITE_NEWS_BASE_API_URL;
export const getCatigorys = async ():Promise<CatigorysApiResponse> => {
  try {
    const respons = await axios.get<CatigorysApiResponse>(API_CATIGORYS + "available/categories", {
      params: {
        apiKey: API_KEY,
      },
    });
    //console.log(respons.data);
    return respons.data;
  } catch (error) {
    console.log(error);
    return {categories:[],description:'',status:'error'};
    
  }
};
