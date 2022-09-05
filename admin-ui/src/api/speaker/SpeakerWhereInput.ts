import { StringFilter } from "../../util/StringFilter";

export type SpeakerWhereInput = {
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  password?: StringFilter;
};
