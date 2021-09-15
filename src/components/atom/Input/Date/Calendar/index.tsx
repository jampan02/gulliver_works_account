import React from "react";
import styles from "./style.module.scss";

type Props = {
  value: string;
  placeholder?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const CalendarDate: React.FC<Props> = ({ value, placeholder, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="date"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CalendarDate;
