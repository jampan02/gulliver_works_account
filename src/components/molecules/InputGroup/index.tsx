import React from "react";
import styles from "./style.module.scss";

type Props = {
  label?: string;
};

const InputGroup: React.FC<Props> = ({ children, label }) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      {children}
    </div>
  );
};

export default InputGroup;
