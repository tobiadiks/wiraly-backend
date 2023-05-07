import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  business_name?: string;
  date_created?: Date;
  date_updated?: Date;
  email?: string;
  email_verified?: boolean | null;
  logo?: string | null;
  password?: string;
  phone?: string;
  roles?: InputJsonValue;
  username?: string;
};
