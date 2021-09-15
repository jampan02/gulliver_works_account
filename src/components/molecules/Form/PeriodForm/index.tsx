import React from "react";
import styles from "./style.module.scss";
import CalendarDate from "../../../atom/Input/Date/Calendar";
type Props = {
  startedAt: string;
  endedAt: string;
  setStartedAt: React.Dispatch<React.SetStateAction<string>>;
  setEndedAt: React.Dispatch<React.SetStateAction<string>>;
};

const PeriodForm: React.FC<Props> = ({
  startedAt,
  endedAt,
  setStartedAt,
  setEndedAt,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>期間</p>
      <div className={styles.calendarContainer}>
        <CalendarDate
          value={startedAt}
          placeholder="2010-01-23"
          onChange={setStartedAt}
        />
        <div className={styles.space}></div>
        <CalendarDate
          value={endedAt}
          placeholder="2010-01-23"
          onChange={setEndedAt}
        />
      </div>
    </div>
  );
};
export default PeriodForm;
