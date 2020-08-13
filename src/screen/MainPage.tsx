import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { Article } from "../components/article/Article";
import "./MainPage.css";
import { getRss } from "../components/rss/RssActions";
export const MainPage = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);

  useEffect(() => {
    getRss();
  }, []);
  return (
    <div className="mainPage">
      {articles.map((article) => {
        return <Article {...article} />;
      })}
    </div>
  );
};
