import React from "react";
import styles from "./style.module.scss";
import Button from "../../../atom/Button";
import { PatchProfileProps } from "../../../../data/Profile";
import TextField from "../../../atom/Input";
import InputGroup from "../../InputGroup";
import Select from "../../../atom/Select";
import Date from "../../../atom/Date";
import Error from "../../../atom/Error";

type Props = {
  //引数の型をまとめる
  profile: PatchProfileProps;
};

const ProfileModal: React.FC<Props> = ({ profile }) => {
  const {
    firstName,
    lastName,
    setFirstName,
    setLastName,
    firstNameKana,
    lastNameKana,
    setFirstNameKana,
    setLastNameKana,
    title,
    onSubmit,
    birthOfDate,
    setBirthOfDate,
    gender,
    setGender,
    address,
    setAddress,
    onCloseModal,
    register,
    errors,
  } = profile;
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <form onSubmit={onSubmit}>
        <InputGroup label="名前">
          <div className={styles.nameContainer}>
            <TextField
              register={register}
              value={firstName}
              setValue={setFirstName}
              name="firstName"
            />
            <TextField
              register={register}
              value={lastName}
              setValue={setLastName}
              name="lastName"
            />
          </div>
        </InputGroup>
        <InputGroup>
          <div className={styles.nameContainer}>
            <TextField
              register={register}
              value={firstNameKana}
              setValue={setFirstNameKana}
              name="firstNameKana"
            />
            <TextField
              register={register}
              value={lastNameKana}
              setValue={setLastNameKana}
              name="lastNameKana"
            />
          </div>
        </InputGroup>
        <InputGroup label="住まい">
          <TextField
            register={register}
            value={address}
            setValue={setAddress}
            name="address"
          />
        </InputGroup>
        <InputGroup label="性別">
          <Select
            values={[
              { label: "男性", value: "MALE" },
              {
                label: "女性",
                value: "FEMALE",
              },
            ]}
            defaultValue={gender}
            setValue={setGender}
          />
        </InputGroup>
        <InputGroup label="生年月日">
          <Date value={birthOfDate} onChange={setBirthOfDate} />
        </InputGroup>
        <div>
          {errors.address && <Error message="住所は必須です" />}
          {errors.firstName && <Error message="名前は必須です" />}
          {errors.lastName && <Error message="苗字は必須です" />}
          {errors.firstNameKana && <Error message="名前（カナ）は必須です" />}
          {errors.lastNameKana && <Error message="苗字（カナ）は必須です" />}
        </div>
        <div className={styles.buttonContainer}>
          <Button
            backgroundColor="#E5E5E5"
            onClick={onCloseModal}
            color="black"
          >
            キャンセル
          </Button>
          <Button backgroundColor="#05c757" color="white">
            更新
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileModal;
