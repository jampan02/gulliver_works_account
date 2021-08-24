import React, { useEffect, useState } from "react";
import { DeepMap, FieldError, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignInParams, useSignInPresenter } from "./useSignInPresenter";
import eye from "../signIn/Vector.png";
import { Account } from "../../data/Account";

const SignInPage = () => {
  //パスワード用inputのtypeを判定するためのState
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const { register, handleSubmit, errors } = useForm<SignInParams>();
  const { signIn } = useSignInPresenter();
  const { account } = useCurrentAccount();
  const history = useHistory();
  console.log(errors);
  useEffect(() => {
    if (account) history.push("/");
  }, [account]);

  const onSubmit = (data: SignInParams) => {
    signIn(data);
  };

  //エラーメッセージ取得関数
  const getErrorMessage = (
    args: DeepMap<
      {
        email: string;
        password: string;
      },
      FieldError
    >
  ) => {
    if (args.email) {
      //emailにエラーがある場合
      switch (args.email.type) {
        case "required":
          return "メールアドレスは必須です";
        case "pattern":
          return "メールアドレスの形式が不正です";
        default:
          return null;
      }
    } else if (args.password) {
      //passwordにエラーがある場合
      switch (args.password.type) {
        case "required":
          return "パスワードは必須です";
        case "minLength":
          return "パスワードは最低6文字です";
        default:
          return null;
      }
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>求職者ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input_mail_container}>
            <p>メールアドレス</p>
            <div className={styles.input_mail_input_container}>
              <input
                name="account.email"
                type="email"
                placeholder="coadmap@mail.com"
                ref={register({
                  required: true,
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "メールアドレスの形式が不正です",
                  },
                })}
              />
            </div>
          </div>
          <div className={styles.input_password_container}>
            <p>パスワード</p>
            <div className={styles.input_password_input_container}>
              <input
                name="account.password"
                placeholder="パスワードを入力"
                type={isRevealPassword ? "text" : "password"}
                ref={register({ required: true, minLength: 6 })}
              />
              <img
                src={eye}
                alt="eye"
                className={styles.eye}
                onClick={() => {
                  //目アイコンをクリックすると、isRevealPasswordの値を反転させる
                  setIsRevealPassword(!isRevealPassword);
                }}
              />
            </div>
          </div>
          {
            //パスワード、メールアドレスのバリデーションエラー表示
            errors.account && (
              <p className={styles.error}>{getErrorMessage(errors.account)}</p>
            )
          }

          <div className={styles.login}>
            <button type="submit" className={styles.submit_button_text}>
              ログイン
            </button>
          </div>
          <div className={styles.forgot_password_container}>
            <Link to="#">パスワードを忘れた方はこちら</Link>
          </div>

          <div className={styles.navigate_signup}>
            <button>新規登録はこちら</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
