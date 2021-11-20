import React from "react";
import styles from "./style.module.scss";

type Props = {
  //ボタンの背景色
  backgroundColor: string;
  //ボタンの文字色
  color: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  backgroundColor,
  color,
  children,
  onClick,
}) => {
  const buttonCSS = { backgroundColor, color };
  return (
    <div className={styles.container}>
      <button
        onClick={onClick}
        style={buttonCSS}
        className={styles.button}
        type={onClick ? "button" : "submit"}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
