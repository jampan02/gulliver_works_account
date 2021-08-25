import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const SideBar = () => {
  //「企業詳細」のページかどうかに応じて、文字色を変更するためのState
  //今回は、「企業詳細」が選択されていると仮定してtrueにしています
  const [isCompanyPage, setIsCompanyPage] = useState(true);
  //選択された側の文字色
  const selectedPage = { color: "#000000" };
  //選択されてない側の文字色
  const deselectedPage = { color: "#7d7d7d" };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_content_container}>
        {/*isCompanyがtrue（企業詳細が選択されている）場合は、selectedPage （黒）を着色 */}
        <Link
          to="#"
          style={isCompanyPage ? selectedPage : deselectedPage}
          className={styles.company}
        >
          企業詳細
        </Link>
        {/*isCompanyがtrue（企業詳細が選択されている）場合は、deselectedPage（グレー）を着色 */}
        <Link
          to="#"
          style={isCompanyPage ? deselectedPage : selectedPage}
          className={styles.recruitment}
        >
          募集管理
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
