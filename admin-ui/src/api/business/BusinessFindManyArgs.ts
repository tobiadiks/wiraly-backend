import { BusinessWhereInput } from "./BusinessWhereInput";
import { BusinessOrderByInput } from "./BusinessOrderByInput";

export type BusinessFindManyArgs = {
  where?: BusinessWhereInput;
  orderBy?: Array<BusinessOrderByInput>;
  skip?: number;
  take?: number;
};
