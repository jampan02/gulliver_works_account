import React, { FormEvent } from "react";
import styles from "./style.module.scss";
import TextForm from "../../Form/TextForm";
import PeriodForm from "../../Form/PeriodForm";
import SubmitCancelForm from "../../Form/SubmitCancelForm";

type Props = {
  title: string;
  nameLabel: string;
  positionLabel: string;
  discriptionLabel?: string;
  discriptionPlaceholder?: string;
  onCloseModal: () => void;
  onSubmit: (e: FormEvent) => void;
  isWorkHistory?: boolean;
  isAcademicHistory?: boolean;
  isAdd?: boolean;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  position: string;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  startedAt: string;
  endedAt: string;
  setStartedAt: React.Dispatch<React.SetStateAction<string>>;
  setEndedAt: React.Dispatch<React.SetStateAction<string>>;
  discription?: string;
  setDiscription?: React.Dispatch<React.SetStateAction<string>>;
};

const ProfileModal: React.FC<Props> = ({
  title,
  nameLabel,
  positionLabel,
  discriptionLabel,
  discriptionPlaceholder,
  onCloseModal,
  onSubmit,
  name,
  setName,
  position,
  setPosition,
  startedAt,
  endedAt,
  setStartedAt,
  setEndedAt,
  discription,
  setDiscription,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <form onSubmit={onSubmit}>
        <TextForm title={nameLabel} value={name} setValue={setName} />
        <TextForm
          title={positionLabel}
          value={position}
          setValue={setPosition}
        />
        <PeriodForm
          startedAt={startedAt}
          endedAt={endedAt}
          setEndedAt={setEndedAt}
          setStartedAt={setStartedAt}
        />
        {discriptionLabel && (
          <TextForm
            title={discriptionLabel}
            value={discription}
            setValue={setDiscription}
            placeholder={discriptionPlaceholder}
          />
        )}
        <SubmitCancelForm
          Submit={{ title: "更新" }}
          Cancel={{ title: "キャンセル", onClick: onCloseModal }}
        />
      </form>
    </div>
  );
};

export default ProfileModal;
