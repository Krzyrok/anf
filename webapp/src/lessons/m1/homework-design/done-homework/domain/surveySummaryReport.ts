import { SurveyQuestionType } from "./question";

export interface SurveySummaryReport {
  topic: string;
  questionsAnswersSummaries: QuestionAnswersSummaryReport[];
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
  selections: number;
}

export interface SurveySingleAnswerQuestionAnswersSummaryReport
  extends QuestionAnswersSummaryBaseReport {
  type: SurveyQuestionType.singleAnswer;
  answersSummary: SingleAnswerQuestionAnswerSummaryReport[];
}

type MultipleAnswerQuestionAnswerSummaryReport =
  SingleAnswerQuestionAnswerSummaryReport;

export interface SurveyMultipleAnswerQuestionAnswersSummaryReport
  extends QuestionAnswersSummaryBaseReport {
  type: SurveyQuestionType.multipleAnswer;
  answersSummary: MultipleAnswerQuestionAnswerSummaryReport[];
}

interface OpenEndedQuestionAnswerSummaryReport {
  text: string;
  submitDate: Date;
}

export interface SurveyOpenEndedQuestionAnswersSummaryReport
  extends QuestionAnswersSummaryBaseReport {
  type: SurveyQuestionType.openEnded;
  answersSummary: OpenEndedQuestionAnswerSummaryReport[];
}
