import DefaultSelect from "../../../atom/Input/Select/Default";
import React, { FormEvent } from "react";
import styles from "./style.module.scss";

type Props = {
  title: string;
  values: {
    label: string;
    value: string;
  }[];
  defaultValue: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SelectForm: React.FC<Props> = ({
  title,
  values,
  defaultValue,
  setValue,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <DefaultSelect
        values={values}
        defaultValue={defaultValue}
        setValue={setValue}
      />
    </div>
  );
};

export default SelectForm;
