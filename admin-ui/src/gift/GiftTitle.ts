import { Gift as TGift } from "../api/gift/Gift";

export const GIFT_TITLE_FIELD = "id";

export const GiftTitle = (record: TGift): string => {
  return record.id || record.id;
};
