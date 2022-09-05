import { Speaker as TSpeaker } from "../api/speaker/Speaker";

export const SPEAKER_TITLE_FIELD = "firstName";

export const SpeakerTitle = (record: TSpeaker): string => {
  return record.firstName || record.id;
};
