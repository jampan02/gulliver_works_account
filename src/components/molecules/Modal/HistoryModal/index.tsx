import { PatchHistoryProps } from "data/History";
import React from "react";
import styles from "./style.module.scss";
import Button from "../../../atom/Button";
import TextField from "../../../atom/Input";
import InputGroup from "../../InputGroup";
import Date from "../../../atom/Date";

type Props = PatchHistoryProps;

const HistoryModal: React.FC<Props> = ({
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
  register,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <form onSubmit={onSubmit}>
        <InputGroup label={nameLabel}>
          <TextField
            register={register}
            value={name}
            setValue={setName}
            name="name"
          />
        </InputGroup>
        <InputGroup label={positionLabel}>
          <TextField
            register={register}
            value={position}
            setValue={setPosition}
            name="position"
          />
        </InputGroup>
        <InputGroup label="期間">
          <Date value={startedAt} onChange={setStartedAt} />
          <Date value={endedAt} onChange={setEndedAt} />
        </InputGroup>
        {discriptionLabel && (
          <InputGroup label={discriptionLabel}>
            <TextField
              placeholder={discriptionPlaceholder}
              register={register}
              value={discription}
              setValue={setDiscription}
              name="discription"
            />
          </InputGroup>
        )}
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

export default HistoryModal;
