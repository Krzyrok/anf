import * as React from "react";
import { SurveyQuestionType } from "../../../domain/question";
import { QuestionAnswersSummaryReport } from "../../../domain/surveySummaryReport";
import { WithRespondentsNumber } from "./respondentsNumber";
import { SingleAnswerQuestionSummary } from "./singleAnswer/SingleAnswerQuestionSummary";
import { MultipleAnswerQuestionSummary } from "./multipleAnswer/MultipleAnswerQuestionSummary";
import { OpenEndedQuestionSummary } from "./openEnded/OpenEndedQuestionSummary";

type QuestionSummaryProps = QuestionAnswersSummaryReport &
  WithRespondentsNumber;

export const QuestionSummary: React.FC<QuestionSummaryProps> = (props) => {
  if (props.type === SurveyQuestionType.singleAnswer) {
    return <SingleAnswerQuestionSummary {...props} />;
  }

  if (props.type === SurveyQuestionType.multipleAnswer) {
    return <MultipleAnswerQuestionSummary {...props} />;
  }

  return <OpenEndedQuestionSummary {...props} />;
};
