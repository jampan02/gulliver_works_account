import React from "react";
import styles from "./style.module.scss";
import user_image from "../../images/profile/icon.png";
import background_image from "../../images/profile/background.png";
//職歴の型
interface WORK_HISTROY {
  startedAt: string;
  endedAt: string;
  name: string;
  position: string;
  discription: string;
}
//学歴の型
interface ACADEMIC_HISTROY {
  startedAt: string;
  endedAt: string;
  name: string;
  position: string;
}
//ユーザープロフィールの型
type USER = {
  name: string;
  age: number;
  self_introduction: string;
  address: string;
  college: string;
  user_image: string;
  background_image: string;
  work_hisotry: WORK_HISTROY[];
  academic_history: ACADEMIC_HISTROY[];
};

const ProfilePage = () => {
  //Figmaに記載されていた情報を元に、ダミーデータを作成
  const dummy: USER = {
    name: "牧野暉弘",
    age: 59,
    self_introduction:
      "高校では、表現活動に挑戦したく、演劇部・美術部・放送部（映像制作）・軽音部の4つの部活に所属していました。作り上げるものは異なりましたが、「観てくれる人のために部員と共に試行錯誤を繰り返すこと」は全ての部活で共通していました。大学入学時には体験型デジタルアートを通してものづくりを啓蒙するShibaLabというサークルに所属しました。「お客さんが楽しむインタラクティブアートってなんだろう」と常に疑問を持ちながら情報学部や電子工学部の学生と共に制作しました。大学でデザインを学んでいるうちに、これまでの部活動やサークル、課外活動は「ユーザーのためにチームで優れた体験価値を提供すること」に繋がっていると感じ、より深く学んでいきたいと考えています",
    address: "東京都",
    college: "青山学院大学大学院",
    user_image,
    background_image,
    work_hisotry: [
      {
        startedAt: "2020-01",
        endedAt: "2021-07",
        name: "株式会社ドーエヌナー",
        position: "企画広報の係長",
        discription:
          "複数の新規事業の立ち上げからグロースまで担当。ヘルスケアとモバイルアプリの分野では新記録を残した。",
      },
      {
        startedAt: "2020-01",
        endedAt: "2021-07",
        name: " 株式会社サイバーエージェンス",
        position: "企画広報の係長",
        discription: "  大手広告のコンサルティングを担当。",
      },
    ],
    academic_history: [
      {
        startedAt: "2020-01",
        endedAt: "2021-07",
        name: "虎ノ門大学大学院",
        position: " 虎学部",
      },
      {
        startedAt: "2020-01",
        endedAt: "2021-07",
        name: "虎ノ門大学",
        position: " 虎学部",
      },
    ],
  };

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
              <img src={dummy.user_image} />
            </div>
            <div className={styles.profile_user_data}>
              <div className={styles.profile_user_data_name}>
                <p>{`${dummy.name}(${dummy.age})`}</p>
              </div>
              <div className={styles.profile_user_data_content_container}>
                <div className={styles.profile_user_data_title}>
                  <p>住まい</p>
                  <p>最終学歴</p>
                </div>
                <div className={styles.profile_user_data_content}>
                  <p>{dummy.address}</p>
                  <p>{dummy.college}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*自己紹介 */}
        <div className={styles.profile_introduction}>
          <p className={styles.profile_introduction_title}>自己紹介</p>

          <div className={styles.profile_introduction_content}>
            <p>{dummy.self_introduction}</p>
          </div>
          <button className={styles.edit_button}>編集する</button>
        </div>
        {/*職歴・学歴*/}
        <div className={styles.profile_history_container}>
          {/*職歴*/}
          <div className={styles.profile_history}>
            <p className={styles.profile_history_title}>職歴</p>
            <div className={styles.profile_history_contents_wrapper}>
              {dummy.work_hisotry.map((work) => (
                <div className={styles.profile_history_content_wrapper}>
                  <div className={styles.profile_history_date}>
                    <p>
                      {work.startedAt} - <br />
                      {work.endedAt}
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
                      {work.discription}
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
              {dummy.academic_history.map((academic) => (
                <div className={styles.profile_history_content_wrapper}>
                  <div className={styles.profile_history_date}>
                    {academic.startedAt} - <br />
                    {academic.endedAt}
                  </div>
                  <div className={styles.profile_history_content_container}>
                    <p className={styles.profile_history_content_title}>
                      {academic.name}
                    </p>
                    <p className={styles.profile_history_content_subtitle}>
                      {academic.position}
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
};
export default ProfilePage;
