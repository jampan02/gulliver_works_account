import DefaultTextField from "../../../atom/Input/TextField/Default";
import React from "react";
import styles from "./style.module.scss";
type Props = {
  title: string;
  firstHalfValue: string;
  firstHalfPlaceholder?: string;
  setFirstHalfValue: React.Dispatch<React.SetStateAction<string>>;
  secondHalfValue: string;
  setSecondHalfValue: React.Dispatch<React.SetStateAction<string>>;
  secondHalfPlaceholder?: string;
};

const SplitedTextForm: React.FC<Props> = ({
  title,
  firstHalfValue,
  secondHalfValue,
  setFirstHalfValue,
  setSecondHalfValue,
  firstHalfPlaceholder,
  secondHalfPlaceholder,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.textFieldContainer}>
        <DefaultTextField
          value={firstHalfValue}
          setValue={setFirstHalfValue}
          placeholder={firstHalfPlaceholder}
        />
        <div className={styles.space}></div>
        <DefaultTextField
          value={secondHalfValue}
          setValue={setSecondHalfValue}
          placeholder={secondHalfPlaceholder}
        />
      </div>
    </div>
  );
};

export default SplitedTextForm;
