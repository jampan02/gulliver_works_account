import React, { FormEvent } from "react";
import styles from "./style.module.scss";
import TextForm from "../../Form/TextForm";
import PeriodForm from "../../Form/PeriodForm";
import SubmitCancelForm from "../../Form/SubmitCancelForm";
import SingleDateForm from "../../../molecules/Form/SingleDateForm";
import SelectForm from "../../../molecules/Form/SelectForm";

type Props = {
  title: string;
  profileName: string;
  profileNameLabel: string;
  setProfileName: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: FormEvent) => void;
  birthday: string;
  setBirthday: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  onCloseModal: () => void;
};

const HistoryModal: React.FC<Props> = ({
  title = "プロフィール",
  profileName,
  setProfileName,
  onSubmit,
  birthday,
  setBirthday,
  gender,
  setGender,
  address,
  setAddress,
  onCloseModal,
  profileNameLabel,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <form onSubmit={onSubmit}>
        <TextForm
          title={profileNameLabel}
          value={profileName}
          setValue={setProfileName}
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

export default HistoryModal;
