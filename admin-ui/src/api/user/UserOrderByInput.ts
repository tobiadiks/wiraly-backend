import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  business_name?: SortOrder;
  date_created?: SortOrder;
  date_updated?: SortOrder;
  email?: SortOrder;
  email_verified?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  roles?: SortOrder;
  username?: SortOrder;
};
