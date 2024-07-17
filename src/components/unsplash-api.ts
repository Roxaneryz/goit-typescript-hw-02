import axios from "axios";
import { Image } from "../models/ImageModel";

axios.defaults.baseURL = "https://api.unsplash.com/"



const ACCESS_KEY:string = "10cPb7ZmAfPJJXGr0Q506wT3_T2wHthP08JX3VfepB4";
type Params = {
  query: string;
  page: number;
  per_page: number;
  client_id: string;
    orientation: "landscape" | "portraite";
};


type Result = {
    results: Image[];
    total_pages: number;
    
}

const getImages = async (query:string, page:number = 1, perPage:number = 12): Promise<Result> => {
    const params:Params= {
      query: query,
      page,
      per_page: perPage,
        client_id: ACCESS_KEY,
      orientation:"landscape"
    };
    
    
    const response = await axios.get('/search/photos', {
    params
    });

    return response.data;
}
    export default getImages;