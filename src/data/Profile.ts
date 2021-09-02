export interface Profile {
  id: string;
  first_name: string;
  last_name: string;
  first_name_kana: string;
  last_name_kana: string;
  gender: string;
  phone: string;
  postal_code: string;
  address: string;
  date_of_birth: string;
  biography: string;
}
export interface PatchProfile {
  first_name: string;
  last_name: string;
  first_name_kana: string;
  last_name_kana: string;
  gender: string;
  phone?: string;
  nationality?: string;
  place_of_residence: string;
  postal_code: string;
  address: string;
  english_skill?: string;
  birth_of_date: string;
  biography?: string;
}
