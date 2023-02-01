import { AnsweredSurvey } from "./answeredSurvey";

// or SurveysAggregate or smth like this;
export interface TopicSurvey {
  topic: string;
  answeredSurveys: AnsweredSurvey[];
}
