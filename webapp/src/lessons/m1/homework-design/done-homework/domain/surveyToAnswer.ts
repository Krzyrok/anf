import { AnsweredSurveyQuestion } from "./question";

export interface SurveyToEdit {
  topic: string;
  questions: AnsweredSurveyQuestion[];
}
