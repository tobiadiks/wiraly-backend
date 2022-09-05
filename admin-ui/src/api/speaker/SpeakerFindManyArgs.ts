import { SpeakerWhereInput } from "./SpeakerWhereInput";
import { SpeakerOrderByInput } from "./SpeakerOrderByInput";

export type SpeakerFindManyArgs = {
  where?: SpeakerWhereInput;
  orderBy?: Array<SpeakerOrderByInput>;
  skip?: number;
  take?: number;
};
