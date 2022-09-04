import { GiftWhereInput } from "./GiftWhereInput";
import { GiftOrderByInput } from "./GiftOrderByInput";

export type GiftFindManyArgs = {
  where?: GiftWhereInput;
  orderBy?: Array<GiftOrderByInput>;
  skip?: number;
  take?: number;
};
