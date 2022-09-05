import { BusinessWhereUniqueInput } from "./BusinessWhereUniqueInput";
import { BusinessUpdateInput } from "./BusinessUpdateInput";

export type UpdateBusinessArgs = {
  where: BusinessWhereUniqueInput;
  data: BusinessUpdateInput;
};
