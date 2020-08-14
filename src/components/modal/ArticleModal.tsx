import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
//@ts-ignore
import Mercury from "@postlight/mercury-parser";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./ArticleModal.css";

interface IArticeModal {
  handleClose: () => void;
  open: boolean;
  link: string;
}

export const ArticleModal: React.FC<IArticeModal> = ({
  open,
  handleClose,
  link,
}) => {
  const [content, setContent] = useState<any>("");
  useEffect(() => {
    const getContent = () => {
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

  return (
    <div>
      <Modal className="modal" open={open} onClose={handleClose}>
        {content === "" ? (
          <div className="spinner">
            <CircularProgress />
          </div>
        ) : (
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content || "" }}
          />
        )}
      </Modal>
    </div>
  );
};
