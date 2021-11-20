import { Profile } from "./Profile";
import { Academic_History } from "./AcademicHistory";
import { Work_History } from "./WorkHistory";

export interface Account {
  id: string;
  email: string;
  profile: Profile;
  academicHistories: Academic_History[];
  workHistories: Work_History[];
}
