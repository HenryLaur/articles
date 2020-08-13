import React, { useState, useEffect } from "react";
import { Modal, makeStyles } from "@material-ui/core";
//@ts-ignore
import Mercury from "@postlight/mercury-parser";
import CircularProgress from "@material-ui/core/CircularProgress";

interface IArticeModal {
  handleClose: any;
  open: boolean;
  link: string;
}
const useStyles = makeStyles({
  content: {
    background: "white",
    position: "absolute",
    width: "90%",
    left: "20",
    bottom: "30",
    margin: "50px",
  },
  modal: {
    overflow: "auto",
  },
  container: {
    maxHeight: "90%",
  },
  spinner: {
    textAlign: "center",
    marginTop: "45vh",
    outline: "none",
  },
});
export const ArticleModal: React.FC<IArticeModal> = ({
  open,
  handleClose,
  link,
}) => {
  const [content, setContent] = useState<any>("");
  const classes = useStyles();
  useEffect(() => {
    const getContent = async () => {
      if (open === true && content === "") {
        Mercury.parse("https://cors-anywhere.herokuapp.com/" + link).then(
          (result: any) => {
            setContent(result.content);
          }
        );
      }
    };
    getContent();
  }, [open, content, setContent, link]);

  console.log(content);

  return (
    <div>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        {content === "" ? (
          <div className={classes.spinner}>
            <CircularProgress />
          </div>
        ) : (
          <div id="continer">
            <div
              id="content"
              className={classes.content}
              dangerouslySetInnerHTML={{ __html: content || "" }}
            ></div>
          </div>
        )}
      </Modal>
    </div>
  );
};
