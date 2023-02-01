import { SurveyQuestion } from "./question";

export interface AnsweredSurvey {
  fillingStartDate: Date; // or IsoString with reflected in the property name (but avoided);
  submissionDate: Date;
  // fillingTotalTime: string - computed in component; alternatively computed property in domain object
  questions: SurveyQuestion[];
}
