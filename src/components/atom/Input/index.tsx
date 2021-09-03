import React from "react";
import styles from "./style.module.scss";

type Props = {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  register?: any;
  name?: string;
};

const TextField: React.FC<Props> = ({
  value,
  setValue,
  placeholder,
  register,
  name,
}) => {
  return (
    <div className={styles.container}>
      <input
        ref={register && register({ required: true })}
        className={styles.input}
        type="text"
        name={name}
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
export default TextField;
