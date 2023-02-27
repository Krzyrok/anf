import { AnsweredSurvey } from "./answeredSurvey";

export interface Survey {
  topic: string;
  answeredSurveys: AnsweredSurvey[];
}
