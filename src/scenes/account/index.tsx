import React, { FormEvent, useEffect, useState } from "react";
import styles from "./style.module.scss";
import axios from "axios";
import user_image from "../../images/profile/icon.png";
import background_image from "../../images/profile/background.png";
import ProfileModal from "../../components/molecules/Modal/ProfileModal";
import { Account } from "../../data/Account";
import { Academic_History } from "../../data/AcademicHistory";
import { Work_History } from "../../data/WorkHistory";
import Modal from "react-modal";
//APIモックサーバーのURL
const URL = "https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io";
const onAddHistory = async (data: Work_History | Academic_History) => {
  //dataに、job_summryが含まれているか調べる（学歴変数には含まれていないため、職歴用の変数を受け取ったことがわかる）
  if ("job_summary" in data) {
    //職歴追加関数
    await axios
      .post(`${URL}/accounts/{account_id}/work_histories`, {
        work_history: data,
      })
      .then(() => {
        alert("追加しました！");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    //学歴追加関数
    await axios
      .post(`${URL}/accounts/{account_id}/academic_histories`, {
        academic_history: data,
      })
      .then(() => {
        alert("追加しました！");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
const AccountPage = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const [endedAt, setEndedAt] = useState("");
  const [discription, setDiscription] = useState("");
  const [isOpenAddWorkHistoryModal, setIsOpenAddWorkHistoryModal] =
    useState(false);
  const [isOpenAddAcademicHistoryModal, setIsOpenAddAcademicHistoryModal] =
    useState(false);
  const [account, setAccount] = useState<Account | undefined>();
  useEffect(() => {
    //モーダルの依存変数に変化があった場合実行する
    if (!isOpenAddWorkHistoryModal || !isOpenAddAcademicHistoryModal) {
      //テキストフィールド初期化
      setName("");
      setPosition("");
      setStartedAt("");
      setEndedAt("");
      setDiscription("");
    }
  }, [isOpenAddAcademicHistoryModal, isOpenAddWorkHistoryModal]);

  useEffect(() => {
    //初回のみ実行、account情報を持ってくる
    const f = async () => {
      await axios
        .get<Account>(`${URL}/accounts/`)
        .then((res) => {
          const data = res.data;
          setAccount(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    f();
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
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isOpenAddAcademicHistoryModal) {
      //学歴を追加する場合
      //バリデーション
      if (!name) {
        alert("学校名は必須です");
        return;
      } else if (!position) {
        alert("学部・学科名は必須です");
        return;
      } else if (!startedAt) {
        alert("入学日時は必須です");
        return;
      } else if (!endedAt) {
        alert("卒業日時は必須です");
        return;
      }
      //モーダル閉じる
      setIsOpenAddAcademicHistoryModal(false);
      const data: Academic_History = {
        name,
        faculty: position,
        since_date: startedAt,
        until_date: endedAt,
      };
      onAddHistory(data);
    } else {
      //職歴を追加する場合
      //バリデーション
      if (!name) {
        alert("企業名は必須です");
        return;
      } else if (!position) {
        alert("部署・役職は必須です");
        return;
      } else if (!startedAt) {
        alert("入社日時は必須です");
        return;
      } else if (!endedAt) {
        alert("退職日時は必須です");
        return;
      } else if (!discription) {
        alert("職務内容は必須です");
        return;
      }
      //モーダル閉じる
      setIsOpenAddWorkHistoryModal(false);
      const data: Work_History = {
        position,
        job_summary: discription,
        name,
        since_date: startedAt,
        until_date: endedAt,
      };
      onAddHistory(data);
    }
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

              <button
                className={styles.add_button}
                onClick={() => setIsOpenAddWorkHistoryModal(true)}
              >
                職歴を追加
              </button>
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

              <button
                className={styles.add_button}
                onClick={() => setIsOpenAddAcademicHistoryModal(true)}
              >
                学歴を追加
              </button>
            </div>
          </div>
        </div>
        {/*React-Modalを使った、モーダル */}
        <Modal
          ariaHideApp={false}
          isOpen={isOpenAddAcademicHistoryModal}
          onRequestClose={() => setIsOpenAddAcademicHistoryModal(false)}
        >
          <ProfileModal
            title="学歴"
            nameLabel="学校名"
            positionLabel="学部・学科名"
            onCloseModal={() => setIsOpenAddAcademicHistoryModal(false)}
            onSubmit={onSubmit}
            name={name}
            setName={setName}
            position={position}
            setPosition={setPosition}
            startedAt={startedAt}
            setStartedAt={setStartedAt}
            endedAt={endedAt}
            setEndedAt={setEndedAt}
          />
        </Modal>
        <Modal
          ariaHideApp={false}
          isOpen={isOpenAddWorkHistoryModal}
          onRequestClose={() => setIsOpenAddWorkHistoryModal(false)}
        >
          <ProfileModal
            title="職歴"
            nameLabel="企業名"
            positionLabel="部署・役職名"
            discriptionLabel="職務要約"
            discriptionPlaceholder="業務内容や結果。"
            onCloseModal={() => setIsOpenAddWorkHistoryModal(false)}
            onSubmit={onSubmit}
            name={name}
            setName={setName}
            position={position}
            setPosition={setPosition}
            startedAt={startedAt}
            setStartedAt={setStartedAt}
            endedAt={endedAt}
            setEndedAt={setEndedAt}
            discription={discription}
            setDiscription={setDiscription}
          />
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};

export default AccountPage;
