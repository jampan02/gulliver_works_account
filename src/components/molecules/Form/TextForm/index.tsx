import DefaultTextField from "../../../atom/Input/TextField/Default";
import React from "react";
import styles from "./style.module.scss";
type Props = {
  title: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
};

const TextForm: React.FC<Props> = ({ title, value, setValue, placeholder }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <DefaultTextField
        value={value}
        setValue={setValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextForm;
