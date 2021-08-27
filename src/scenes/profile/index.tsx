import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import json from "../../json/account.json";
import axios from "axios";
import user_image from "../../images/profile/icon.png";
import background_image from "../../images/profile/background.png";

type ACCOUNT = typeof json;

const ProfilePage = () => {
  const [account, setAccount] = useState<ACCOUNT | undefined>();
  useEffect(() => {
    axios
      .get<ACCOUNT>(
        "https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io/accounts/"
      )
      .then((res) => {
        const data = res.data;
        setAccount(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //誕生日と、現在時刻を比較して年齢を取得する関数
  const getAge = (arg: string) => {
    let age = 0;
    const birthday = new Date(arg);
    const current = new Date();
    const birthdayYear = birthday.getFullYear();
    const currentYear = current.getFullYear();
    const birthdayMonth = birthday.getMonth() + 1;
    const currentMonth = current.getMonth() + 1;
    const birthdayDate = birthday.getDate();
    const currentDate = current.getDate();
    if (birthdayMonth < currentMonth) {
      //誕生日が過ぎてる場合
      age = currentYear - birthdayYear;
    } else if (birthdayMonth > currentMonth) {
      //誕生日がまだ来ていない場合
      age = currentYear - birthdayYear - 1;
    } else {
      //誕生日の月===現在の月の場合
      if (birthdayDate <= currentDate) {
        //誕生日の日が、今日又は、過ぎている場合
        age = currentYear - birthdayYear;
      } else {
        //誕生日の日がまだ来ていない場合
        age = currentYear - birthdayYear - 1;
      }
    }
    return age;
  };
  if (account) {
    return (
      <div className={styles.profile}>
        <div className={styles.container}>
          {/*ヘッダー*/}
          <div className={styles.profile_header}>
            <div className={styles.profile_background_image_container}>
              <img
                className={styles.profile_background_image}
                src={background_image}
              />
              <button className={styles.profile_edit_button}>
                プロフィールを編集
              </button>
            </div>
            <div className={styles.profile_user_container}>
              <div className={styles.profile_user_thumnail}>
                <img src={user_image} />
              </div>
              <div className={styles.profile_user_data}>
                <div className={styles.profile_user_data_name}>
                  <p>{`${account.profile.last_name}${
                    account.profile.first_name
                  }(${getAge(account.profile.date_of_birth)})`}</p>
                </div>
                <div className={styles.profile_user_data_content_container}>
                  <div className={styles.profile_user_data_title}>
                    <p>住まい</p>
                    <p>最終学歴</p>
                  </div>
                  <div className={styles.profile_user_data_content}>
                    <p>{account.profile.address}</p>
                    {/*一つ目の要素のほうが、二つ目に比べて最近であるため、こちらを最終学歴に設定*/}
                    <p>{account.academic_histories[0].name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*自己紹介 */}
          <div className={styles.profile_introduction}>
            <p className={styles.profile_introduction_title}>自己紹介</p>

            <div className={styles.profile_introduction_content}>
              <p>{account.profile.biography}</p>
            </div>
            <button className={styles.edit_button}>編集する</button>
          </div>
          {/*職歴・学歴*/}
          <div className={styles.profile_history_container}>
            {/*職歴*/}
            <div className={styles.profile_history}>
              <p className={styles.profile_history_title}>職歴</p>
              <div className={styles.profile_history_contents_wrapper}>
                {account.work_histories.map((work, index) => (
                  <div
                    className={styles.profile_history_content_wrapper}
                    key={index}
                  >
                    <div className={styles.profile_history_date}>
                      <p>
                        {work.since_date} - <br />
                        {work.until_date}
                      </p>
                    </div>
                    <div className={styles.profile_history_content_container}>
                      <p className={styles.profile_history_content_title}>
                        {work.name}
                      </p>
                      <p className={styles.profile_history_content_subtitle}>
                        {work.position}
                      </p>
                      <p className={styles.profile_history_content_discription}>
                        {work.job_summary}
                      </p>
                    </div>
                    <button className={styles.edit_button}>編集する</button>
                  </div>
                ))}
              </div>
              <button className={styles.add_button}>職歴を追加</button>
            </div>
            {/*学歴*/}
            <div className={styles.profile_history}>
              <p className={styles.profile_history_title}>学歴</p>
              <div className={styles.profile_history_contents_wrapper}>
                {account.academic_histories.map((academic, index) => (
                  <div
                    className={styles.profile_history_content_wrapper}
                    key={index}
                  >
                    <div className={styles.profile_history_date}>
                      {academic.since_date} - <br />
                      {academic.until_date}
                    </div>
                    <div className={styles.profile_history_content_container}>
                      <p className={styles.profile_history_content_title}>
                        {academic.name}
                      </p>
                      <p className={styles.profile_history_content_subtitle}>
                        {academic.faculty}
                      </p>
                    </div>
                    <button className={styles.edit_button}>編集する</button>
                  </div>
                ))}
              </div>
              <button className={styles.add_button}>学歴を追加</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProfilePage;
