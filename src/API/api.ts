import { DataType } from "./../Types/ContentReducerDataTypes";
import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://content.guardianapis.com/search?q=sport&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c",
});

type axiosGetDataType = {
  config: any;
  data: { response: DataType };
  headers: any;
  request: any;
  status: number;
  statusText: string;
};
export const getData = async () => {
  const response = await instance.get<axiosGetDataType>("");
  console.log(response);
  return response.data;
};
