export type SurveyQuestion =
  | SurveySingleAnswerQuestion
  | SurveyMultipleAnswerQuestion
  | SurveyOpenEndedQuestion;

interface Answer {
  text: string;
  id: string;
}

// interface SingleAnswer {
//   text: string;
//   id: string;
// }

// interface MultipleAnswer {
//   text: string;
//   isSelected: boolean;
// }

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

interface SurveySingleAnswerQuestion extends BaseQuestion {
  type: SurveyQuestionType.singleAnswer;
  possibleAnswers: Answer[]; // or SingleAnswer[]
  selectedAnswerId: string;
}

interface SurveyMultipleAnswerQuestion extends BaseQuestion {
  type: SurveyQuestionType.multipleAnswer;
  possibleAnswers: Answer[]; // or MultipleAnswer
  selectedAnswerIds: string[];
}

interface SurveyOpenEndedQuestion extends BaseQuestion {
  type: SurveyQuestionType.openEnded;
  answer: Answer; // or string;
}
