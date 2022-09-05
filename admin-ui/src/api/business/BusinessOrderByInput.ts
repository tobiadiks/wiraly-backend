import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
