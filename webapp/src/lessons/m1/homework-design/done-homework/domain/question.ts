export type SurveyQuestion =
  | SurveySingleAnswerQuestion
  | SurveyMultipleAnswerQuestion
  | SurveyOpenEndedQuestion;

interface Answer {
  text: string;
  id: string;
}

export interface BaseQuestion {
  id: string;
  question: string;
  type: SurveyQuestionType;
}

export enum SurveyQuestionType {
  singleAnswer = "singleAnswer",
  multipleAnswer = "multipleAnswer",
  openEnded = "openEnded",
}

export interface SurveySingleAnswerQuestion extends BaseQuestion {
  type: SurveyQuestionType.singleAnswer;
  possibleAnswers: Answer[]; // or SingleAnswer[]
  selectedAnswerId: string;
}

export interface SurveyMultipleAnswerQuestion extends BaseQuestion {
  type: SurveyQuestionType.multipleAnswer;
  possibleAnswers: Answer[]; // or MultipleAnswer
  selectedAnswerIds: string[];
}

export interface SurveyOpenEndedQuestion extends BaseQuestion {
  type: SurveyQuestionType.openEnded;
  answer: Answer; // or string;
}
