import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Article as IArticle } from "./ArticleSlice";
import { ArticleModal } from "../modal/ArticleModal";
const useStyles = makeStyles({
  root: {
    width: 345,
    maxWidth: 345,
    margin: "10px",
  },
});
export const Article: React.FC<IArticle> = ({
  author,
  content,
  contentSnippet,
  isoDate,
  link,
  pictureUrl,
  title,
}) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const date = new Date(isoDate);
  return (
    <div>
      <Card className={classes.root} onClick={() => setModalOpen(true)}>
        <CardActionArea>
          <CardMedia component="img" height="140" src={pictureUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {contentSnippet}
            </Typography>
          </CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {date.getUTCDate() +
              "/" +
              (date.getUTCMonth() + 1) +
              "/" +
              date.getUTCFullYear()}
          </Typography>
        </CardActionArea>
      </Card>
      <ArticleModal
        handleClose={() => setModalOpen(false)}
        link={link}
        open={modalOpen}
      />
    </div>
  );
};
