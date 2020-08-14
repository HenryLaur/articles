import Parser from "rss-parser";
import { addAllArticles, Article } from "../article/ArticleSlice";
import store from "../../store/Store";
const parser = new Parser({
  customFields: {
    item: ["media:content"],
  },
});

export const getRss = async () => {
  const feed = await parser.parseURL(
    "https://cors-anywhere.herokuapp.com/https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss"
  );
  store.dispatch(addAllArticles(itemToArticle(feed)));
};

const itemToArticle = (feed: Parser.Output) => {
  const articles: Article[] = [];
  feed.items?.forEach((item) => {
    const article: Article = {
      author: item.creator || "",
      content: item.content || "",
      contentSnippet: item.contentSnippet || "",
      isoDate: item.isoDate || "",
      link: item.link || "",
      pictureUrl: item["media:content"]?.$.url || "",
      title: item.title || "",
    };
    articles.push(article);
  });
  return articles;
};
