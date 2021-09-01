import React from "react";
import styles from "./style.module.scss";

type Props = {
  onClick: () => void;
  title: string;
};

const CancelButton: React.FC<Props> = ({ onClick, title }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default CancelButton;
