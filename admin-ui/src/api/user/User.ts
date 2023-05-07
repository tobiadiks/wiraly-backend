import { JsonValue } from "type-fest";

export type User = {
  business_name: string;
  date_created: Date;
  date_updated: Date;
  email: string;
  email_verified: boolean | null;
  id: string;
  logo: string | null;
  phone: string;
  roles: JsonValue;
  username: string;
};
