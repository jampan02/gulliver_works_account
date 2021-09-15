import React from "react";
import styles from "./style.module.scss";

type Props = {
  title: string;
};

const SubmitButton: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} type="submit">
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
