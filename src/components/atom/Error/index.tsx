import React from "react";
import styles from "./style.module.scss";

type Props = {
  message: string;
};

const Error: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
export default Error;
