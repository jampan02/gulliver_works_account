import React from "react";
import styles from "./style.module.scss";

type Props = {
  values: {
    label: string;
    value: string;
  }[];
  defaultValue: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
const Select: React.FC<Props> = ({ values, defaultValue, setValue }) => {
  return (
    <div className={styles.container}>
      <select className={styles.select}>
        {values.map((value, index) => {
          if (defaultValue === value.label) {
            return (
              <option key={index} value={value.value} selected>
                {value.label}
              </option>
            );
          }
          return (
            <option key={index} value={value.value}>
              {value.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
