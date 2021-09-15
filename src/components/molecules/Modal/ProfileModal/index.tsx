import React, { FormEvent } from "react";
import styles from "./style.module.scss";
import TextForm from "../../Form/TextForm";
import PeriodForm from "../../Form/PeriodForm";
import SubmitCancelForm from "../../Form/SubmitCancelForm";
import SplitedTextForm from "../../Form/SplitedTextForm";
import SelectForm from "../../Form/SelectForm";
import SingleDateForm from "../../Form/SingleDateForm";

type Props = {
  title: string;
  onSubmit: (e: FormEvent) => void;
  birthday: string;
  setBirthday: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  onCloseModal: () => void;
  firstName: string;
  lastName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  firstNameKana: string;
  lastNameKana: string;
  setFirstNameKana: React.Dispatch<React.SetStateAction<string>>;
  setLastNameKana: React.Dispatch<React.SetStateAction<string>>;
};

const ProfileModal: React.FC<Props> = ({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  firstNameKana,
  lastNameKana,
  setFirstNameKana,
  setLastNameKana,
  title = "プロフィール",
  onSubmit,
  birthday,
  setBirthday,
  gender,
  setGender,
  address,
  setAddress,
  onCloseModal,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <form onSubmit={onSubmit}>
        <SplitedTextForm
          title="名前"
          firstHalfValue={lastName}
          secondHalfValue={firstName}
          setFirstHalfValue={setLastName}
          setSecondHalfValue={setFirstName}
        />
        <SplitedTextForm
          title="名前"
          firstHalfValue={lastNameKana}
          secondHalfValue={firstNameKana}
          setFirstHalfValue={setFirstNameKana}
          setSecondHalfValue={setLastNameKana}
        />
        <TextForm title="住まい" value={address} setValue={setAddress} />

        <SelectForm
          title="性別"
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
        <SingleDateForm
          title="生年月日"
          value={birthday}
          onChange={setBirthday}
        />
        <SubmitCancelForm
          Submit={{ title: "更新" }}
          Cancel={{ title: "キャンセル", onClick: onCloseModal }}
        />
      </form>
    </div>
  );
};

export default ProfileModal;
