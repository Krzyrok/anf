import { SurveyQuestionType } from "./question";

export interface SurveySummaryReport {
  topic: string;
  questionsAnswersSummaries: QuestionAnswersSummaryReport[];
  allRespondentsCount: number;
}

type QuestionAnswersSummaryReport =
  | SurveySingleAnswerQuestionAnswersSummaryReport
  | SurveyMultipleAnswerQuestionAnswersSummaryReport
  | SurveyOpenEndedQuestionAnswersSummaryReport;

interface QuestionAnswersSummaryBaseReport {
  question: string;
  type: SurveyQuestionType;
}

interface SingleAnswerQuestionAnswerSummaryReport {
  text: string;
  selections: number;
}

interface SurveySingleAnswerQuestionAnswersSummaryReport
  extends QuestionAnswersSummaryBaseReport {
  type: SurveyQuestionType.singleAnswer;
  answersSummary: SingleAnswerQuestionAnswerSummaryReport[];
}

type MultipleAnswerQuestionAnswerSummaryReport =
  SingleAnswerQuestionAnswerSummaryReport;

interface SurveyMultipleAnswerQuestionAnswersSummaryReport
  extends QuestionAnswersSummaryBaseReport {
  type: SurveyQuestionType.multipleAnswer;
  answersSummary: MultipleAnswerQuestionAnswerSummaryReport[];
}

interface OpenEndedQuestionAnswerSummaryReport {
  text: string;
}

interface SurveyOpenEndedQuestionAnswersSummaryReport
  extends QuestionAnswersSummaryBaseReport {
  type: SurveyQuestionType.openEnded;
  answersSummary: OpenEndedQuestionAnswerSummaryReport[];
}
