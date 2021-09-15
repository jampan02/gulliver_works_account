import CancelButton from "../../../atom/Button/Cancel";
import SubmitButton from "../../../atom/Button/Submit";
import React from "react";
import styles from "./style.module.scss";

type Props = {
  Submit: {
    title: string;
  };
  Cancel: {
    onClick: () => void;
    title: string;
  };
};

const SubmitCancelForm: React.FC<Props> = ({ Submit, Cancel }) => {
  return (
    <div className={styles.container}>
      <CancelButton onClick={Cancel.onClick} title={Cancel.title} />
      <div className={styles.space}></div>
      <SubmitButton title={Submit.title} />
    </div>
  );
};

export default SubmitCancelForm;
