import { AnsweredSurveyQuestion } from "./question";

export interface AnsweredSurvey {
  fillingStartDate: Date; // or IsoString with correct type (subtype of the string);
  submissionDate: Date;
  questions: AnsweredSurveyQuestion[];
  // fillingTotalTime - computed in component because there can be changes in the display logic (UI logic).
  // Alternatively, computed property in domain object
  // fillingTotalTime: TimeSpan;
  // interface TimeSpan {
  //   days: number; // not needed for now
  //   hours: number;
  //   minutes: number;
  //   seconds: number;
  // }
}
