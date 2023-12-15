import instance from "./instance";
import { INews } from "../interface/news";
const getNews = () => {
  return instance.get("/client/news");
};

const addNews = (news: INews) => {
  return instance.post("/news", news);
};

const updateNews = (news: INews) => {
  return instance.patch("/news/" + news.id, news);
};
const deleteNews = (id: number) => {
  return instance.delete("/news/" + id);
};
export { getNews, addNews, updateNews, deleteNews };
