import React from "react";
import styles from "./PhotoComments.module.css";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = (props) => {
  const commentsSection = React.useRef();
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  
  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((item) => (
          <li key={item.comment_ID}>
            <b>{item.comment_author}: </b>
            <span>{item.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
