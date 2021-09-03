import { DeepMap, FieldValues, FieldError } from "react-hook-form";
import { ProfileUseForm } from "./UseForm";

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  gender: string;
  phone: string;
  postal_code: string;
  address: string;
  dateOfBirth: string;
  biography: string;
}
export interface PatchProfileProps {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  firstNameKana: string;
  setFirstNameKana: React.Dispatch<React.SetStateAction<string>>;
  lastNameKana: string;
  setLastNameKana: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  title: string;
  onCloseModal: () => void;
  phone?: string;
  nationality?: string;
  placeOfResidence?: string;
  postalCode?: string;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  englishSkill?: string;
  birthOfDate: string;
  setBirthOfDate: React.Dispatch<React.SetStateAction<string>>;
  biography?: string;
  //registerの型がよくわからなかったためanyとさせていただきます
  register: any;
  errors: DeepMap<ProfileUseForm, FieldError>;
}

export interface PatchProfile {
  phone?: string;
  nationality?: string;
  placeOfResidence?: string;
  postalCode?: string;
  englishSkill?: string;
  biography?: string;
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  gender: string;
  address: string;
  birthOfDate: string;
}
