import { NewSurveyQuestion } from "./question";

export interface NewSurvey {
  topic: string;
  questions: NewSurveyQuestion[];
}
