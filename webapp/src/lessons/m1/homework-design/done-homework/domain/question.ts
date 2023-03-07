// domain modelled for FE.
// On BE domain would look a little bit different, e.g. survey definition (questions) would be separate from
// answered survey. Here I wanted to simplify things so some layer (domain/loader) would load BE model and
// would map it to FE model.

// Example of BE model

// SurveyDefinition (here NewSurvey)
// - id
// - questionDefinition[] (without answer)

// AnsweredSurvey
// - id
// - surveyDefinitionId
// - answeredQuestion[], where one element:
// --  questionDefinitionId
// --  id
// --  answer / answerId / answerIds

// survey to edit or for showing answered individual survey

export type AnsweredSurveyQuestion =
  | AnsweredSurveySingleAnswerQuestion
  | AnsweredSurveyMultipleAnswerQuestion
  | AnsweredSurveyOpenEndedQuestion;

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

export interface AnsweredSurveySingleAnswerQuestion extends BaseQuestion {
  type: SurveyQuestionType.singleAnswer;
  possibleAnswers: Answer[]; // or SingleAnswer[]
  selectedAnswerId: string;
}

export interface AnsweredSurveyMultipleAnswerQuestion extends BaseQuestion {
  type: SurveyQuestionType.multipleAnswer;
  possibleAnswers: Answer[]; // or MultipleAnswer
  selectedAnswerIds: string[];
}

export interface AnsweredSurveyOpenEndedQuestion extends BaseQuestion {
  type: SurveyQuestionType.openEnded;
  answer: Answer; // or string;
}

// new survey
export type NewSurveyQuestion =
  | NewSurveySingleAnswerQuestion
  | NewSurveyMultipleAnswerQuestion
  | NewSurveyOpenEndedQuestion;

export type NewSurveySingleAnswerQuestion = Omit<
  AnsweredSurveySingleAnswerQuestion,
  "selectedAnswerId"
>;

export type NewSurveyMultipleAnswerQuestion = Omit<
  AnsweredSurveyMultipleAnswerQuestion,
  "selectedAnswerIds"
>;

export type NewSurveyOpenEndedQuestion = Omit<
  AnsweredSurveyOpenEndedQuestion,
  "answer"
>;
