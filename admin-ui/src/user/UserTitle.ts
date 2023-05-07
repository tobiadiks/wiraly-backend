import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "business_name";

export const UserTitle = (record: TUser): string => {
  return record.business_name || String(record.id);
};
