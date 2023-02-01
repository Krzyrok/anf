export type SurveyQuestion =
  | SurveySingleAnswerQuestion
  | SurveyMultipleAnswerQuestion
  | SurveyOpenAnswerQuestion;

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

interface BaseQuestion {
  id: string;
  question: string;
}

interface SurveySingleAnswerQuestion extends BaseQuestion {
  type: "singleAnswer";
  possibleAnswers: Answer[]; // or SingleAnswer[]
  selectedAnswerId: string;
}

interface SurveyMultipleAnswerQuestion extends BaseQuestion {
  type: "multipleAnswer";
  possibleAnswers: Answer[]; // or MultipleAnswer
  selectedAnswerIds: string[];
}

interface SurveyOpenAnswerQuestion extends BaseQuestion {
  type: "openAnswer";
  answer: Answer; // or string;
}
