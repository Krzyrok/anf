import * as React from "react";

import {
  OpenEndedQuestionAnswerSummaryReport,
  SurveyOpenEndedQuestionAnswersSummaryReport,
} from "../../../../domain/surveySummaryReport";
import { QuestionSummaryHeader } from "../QuestionSummaryHeader";
import { WithRespondentsNumber } from "../respondentsNumber";

type OpenEndedQuestionSummaryProps =
  SurveyOpenEndedQuestionAnswersSummaryReport & WithRespondentsNumber;

export const OpenEndedQuestionSummary: React.FC<
  OpenEndedQuestionSummaryProps
> = (props) => (
  <>
    <QuestionSummaryHeader
      answersCount={props.answersSummary.length}
      expectedAnswersCount={props.respondentsNumber}
      question={props.question}
    />
    <OpenEndedQuestionSummaryTable answers={props.answersSummary} />
  </>
);

type OpenEndedQuestionSummaryTableProps = {
  answers: OpenEndedQuestionAnswerSummaryReport[];
};
declare const OpenEndedQuestionSummaryTable: React.FC<OpenEndedQuestionSummaryTableProps>;
