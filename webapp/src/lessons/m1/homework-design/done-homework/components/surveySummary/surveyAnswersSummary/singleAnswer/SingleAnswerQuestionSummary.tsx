import { SurveySingleAnswerQuestionAnswersSummaryReport } from "../../../../domain/surveySummaryReport";
import { QuestionSummaryHeader } from "../QuestionSummaryHeader";
import { getAnswersCount } from "../answersCount";
import { WithRespondentsNumber } from "../respondentsNumber";

type SingleAnswerQuestionSummaryProps =
  SurveySingleAnswerQuestionAnswersSummaryReport & WithRespondentsNumber;

export const SingleAnswerQuestionSummary: React.FC<
  SingleAnswerQuestionSummaryProps
> = (props) => (
  <>
    <QuestionSummaryHeader
      answersCount={getAnswersCount(props.answersSummary)}
      expectedAnswersCount={props.respondentsNumber}
      question={props.question}
    />
    TODO K: only interface
    {/* <SingleAnswerQuestionSummaryTable /> */}
    {/* <SingleAnswerQuestionSummaryGraph /> */}
  </>
);
