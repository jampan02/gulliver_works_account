export interface ProfileUseForm {
  address: string;
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
}

export interface HisotryUseForm {
  name: string;
  position: string;
  address: string;
  startedAt: string;
  endedAt: string;
  discription?: string;
}
