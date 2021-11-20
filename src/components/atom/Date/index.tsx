import React from "react";
import styles from "./style.module.scss";

type Props = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const Date: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.date}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Date;
