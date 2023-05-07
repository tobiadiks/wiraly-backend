import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  business_name?: StringFilter;
  email?: StringFilter;
  email_verified?: BooleanNullableFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  phone?: StringFilter;
  username?: StringFilter;
};
