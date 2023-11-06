import { SurveyMultipleAnswerQuestionAnswersSummaryReport } from "../../../../domain/surveySummaryReport";
import { QuestionSummaryHeader } from "../QuestionSummaryHeader";
import { getAnswersCount } from "../answersCount";
import { WithRespondentsNumber } from "../respondentsNumber";

type MultipleAnswerQuestionSummaryProps =
  SurveyMultipleAnswerQuestionAnswersSummaryReport & WithRespondentsNumber;

export const MultipleAnswerQuestionSummary: React.FC<
  MultipleAnswerQuestionSummaryProps
> = (props) => (
  <>
    <QuestionSummaryHeader
      answersCount={getAnswersCount(props.answersSummary)}
      expectedAnswersCount={props.respondentsNumber}
      question={props.question}
    />
    TODO K: only interface
    {/* <MultipleAnswerQuestionSummaryTable /> */}
    {/* <MultipleAnswerQuestionSummaryGraph /> */}
  </>
);
