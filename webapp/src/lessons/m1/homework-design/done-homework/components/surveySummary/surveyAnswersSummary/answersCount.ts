import { SingleAnswerQuestionAnswerSummaryReport } from "../../../domain/surveySummaryReport";

type Answer = Pick<SingleAnswerQuestionAnswerSummaryReport, "selections">;

export const getAnswersCount = (answers: Answer[]) =>
  answers
    .map((answer) => answer.selections)
    .reduce((sum, current) => sum + current, 0);
