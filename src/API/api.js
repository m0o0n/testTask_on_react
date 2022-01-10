import * as axios from "axios";

const instance = axios.create({
  baseURL:
    "https://content.guardianapis.com/search?q=sport&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c",
});

export const getData = () => {
  return instance.get().then((response) => {
    return response.data;
  });
};
