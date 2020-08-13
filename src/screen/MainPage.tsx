import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { Article } from "../components/article/Article";
import "./MainPage.css";
import { getRss } from "../components/rss/RssActions";
import CircularProgress from "@material-ui/core/CircularProgress";
export const MainPage = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);

  useEffect(() => {
    getRss();
  }, []);
  return (
    <div className="mainPage">
      {articles.length === 0 ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        articles.map((article) => {
          return <Article {...article} />;
        })
      )}
    </div>
  );
};
