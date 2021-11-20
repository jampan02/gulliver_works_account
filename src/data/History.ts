import { FormEvent } from "react";
import { DeepMap, FieldError } from "react-hook-form";
import { ProfileUseForm, HisotryUseForm } from "./UseForm";

export interface PatchHistoryProps {
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
  register: any;
  errors: DeepMap<HisotryUseForm, FieldError>;
}
