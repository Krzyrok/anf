import * as React from "react";

import { SurveyOpenEndedQuestionAnswersSummaryReport } from "../../../../domain/surveySummaryReport";
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
    TODO K: only interface
    {/* <OpenEndedQuestionSummaryTable /> */}
  </>
);
