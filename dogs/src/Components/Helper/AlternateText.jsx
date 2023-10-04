import React from "react";
import styles from "./AlternateText.module.css";

const AlternateText = ({ altText }) => {
  return (
    <div className={styles.alternate}>
      <p>{altText}</p>
    </div>
  );
};

export default AlternateText;
