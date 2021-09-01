import { Profile } from "./Profile";
import { Academic_History } from "./AcademicHistory";
import { Work_History } from "./WorkHistory";

export interface Account {
  id: string;
  email: string;
  profile: Profile;
  academic_histories: Academic_History[];
  work_histories: Work_History[];
}
