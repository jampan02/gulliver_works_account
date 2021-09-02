import CalendarDate from "../../../atom/Input/Date/Calendar";
import React, { FormEvent } from "react";
import styles from "./style.module.scss";

type Props = {
  title: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const SingleDateForm: React.FC<Props> = ({ title, value, onChange }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.calendarContainer}>
        <CalendarDate value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default SingleDateForm;
