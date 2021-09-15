import React from "react";
import styles from "./style.module.scss";

type Props = {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
};

const DefaultTextField: React.FC<Props> = ({
  value,
  setValue,
  placeholder,
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
export default DefaultTextField;
