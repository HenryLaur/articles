import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { Article } from "../components/article/Article";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
});
export const MainPage = () => {
  const classes = useStyles();

  const articles = useSelector((state: RootState) => state.articles.articles);

  return (
    <div className={classes.root}>
      {articles.map((article) => {
        return <Article {...article} />;
      })}
    </div>
  );
};
