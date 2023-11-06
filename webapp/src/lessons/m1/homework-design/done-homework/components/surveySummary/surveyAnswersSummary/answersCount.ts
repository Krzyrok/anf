import { SingleAnswerQuestionAnswerSummaryReport } from "../../../domain/surveySummaryReport";

type Answer = Pick<SingleAnswerQuestionAnswerSummaryReport, "selectedCount">;

export const getAnswersCount = (answers: Answer[]) =>
  answers
    .map((answer) => answer.selectedCount)
    .reduce((sum, current) => sum + current, 0);
