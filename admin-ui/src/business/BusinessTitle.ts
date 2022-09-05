import { Business as TBusiness } from "../api/business/Business";

export const BUSINESS_TITLE_FIELD = "name";

export const BusinessTitle = (record: TBusiness): string => {
  return record.name || record.id;
};
