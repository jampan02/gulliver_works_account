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
  useEffect(() => {
    if (account) history.push("/");
  }, [account]);

  const onSubmit = (data: SignInParams) => {
    signIn(data);
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
                  required: {
                    value: true,
                    message: "メールアドレスは必須です",
                  },
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
                ref={register({
                  required: { value: true, message: "パスワードは必須です" },
                  minLength: { value: 6, message: "パスワードは最低6文字です" },
                })}
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
              <>
                {/*メールアドレスにバリデーションエラーがある場合、エラー表示 */}
                {errors.account.email && (
                  <p className={styles.error}>{errors.account.email.message}</p>
                )}
                {/*パスワードにバリデーションエラーがある場合、エラー表示 */}
                {errors.account.password && (
                  <p className={styles.error}>
                    {errors.account.password.message}
                  </p>
                )}
              </>
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
