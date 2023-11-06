import { SurveyQuestionType } from "./question";

export interface SurveySummaryReport {
  topic: string;
  questionsAnswersSummaries: QuestionAnswersSummaryReport[];
  answeredSurveysIds: string[];
  allRespondentsCount: number;
}

export type QuestionAnswersSummaryReport =
  | SurveySingleAnswerQuestionAnswersSummaryReport
  | SurveyMultipleAnswerQuestionAnswersSummaryReport
  | SurveyOpenEndedQuestionAnswersSummaryReport;

interface QuestionAnswersSummaryBaseReport {
  question: string;
  type: SurveyQuestionType;
}

export interface SingleAnswerQuestionAnswerSummaryReport {
  text: string;
  selectedCount: number;
  // `percentage` can be calculated on BE. Whether FE or BE - it depends if there is a lot of answers (but such
  // calculation should not be resource consuming for FE)
  // percentage: number;
}

export interface SurveySingleAnswerQuestionAnswersSummaryReport
  extends QuestionAnswersSummaryBaseReport {
  type: SurveyQuestionType.singleAnswer;
  answersSummary: SingleAnswerQuestionAnswerSummaryReport[];
}

export type MultipleAnswerQuestionAnswerSummaryReport =
  SingleAnswerQuestionAnswerSummaryReport;

export interface SurveyMultipleAnswerQuestionAnswersSummaryReport
  extends QuestionAnswersSummaryBaseReport {
  type: SurveyQuestionType.multipleAnswer;
  answersSummary: MultipleAnswerQuestionAnswerSummaryReport[];
}

export interface OpenEndedQuestionAnswerSummaryReport {
  text: string;
  submitDate: Date;
}

export interface SurveyOpenEndedQuestionAnswersSummaryReport
  extends QuestionAnswersSummaryBaseReport {
  type: SurveyQuestionType.openEnded;
  answersSummary: OpenEndedQuestionAnswerSummaryReport[];
}
