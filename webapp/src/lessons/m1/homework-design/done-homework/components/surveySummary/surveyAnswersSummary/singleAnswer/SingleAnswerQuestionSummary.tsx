import {
  SingleAnswerQuestionAnswerSummaryReport,
  SurveySingleAnswerQuestionAnswersSummaryReport,
} from "../../../../domain/surveySummaryReport";
import { QuestionSummaryHeader } from "../QuestionSummaryHeader";
import { getAnswersCount } from "../answersCount";
import { WithRespondentsNumber } from "../respondentsNumber";

type SingleAnswerQuestionSummaryProps =
  SurveySingleAnswerQuestionAnswersSummaryReport & WithRespondentsNumber;

export const SingleAnswerQuestionSummary: React.FC<
  SingleAnswerQuestionSummaryProps
> = (props) => {
  const answers = mapAnswerSummaryReportsToVisualizationData(
    props.answersSummary
  );
  return (
    <>
      <QuestionSummaryHeader
        answersCount={getAnswersCount(props.answersSummary)}
        expectedAnswersCount={props.respondentsNumber}
        question={props.question}
      />
      <SingleAnswerQuestionSummaryTable answers={answers} />
      <SingleAnswerQuestionSummaryGraph answers={answers} />
    </>
  );
};

declare const mapAnswerSummaryReportsToVisualizationData: (
  answerReports: SingleAnswerQuestionAnswerSummaryReport[]
) => SingleAnswerVisualizationData[];

type SingleAnswerVisualizationData = SingleAnswerQuestionAnswerSummaryReport & {
  percentage: number;
};

interface SummaryVisualizationData {
  answers: SingleAnswerVisualizationData[];
}

type SingleAnswerQuestionSummaryTableProps = SummaryVisualizationData;
declare const SingleAnswerQuestionSummaryTable: React.FC<SingleAnswerQuestionSummaryTableProps>;

type SingleAnswerQuestionSummaryGraphProps = SummaryVisualizationData;
declare const SingleAnswerQuestionSummaryGraph: React.FC<SingleAnswerQuestionSummaryGraphProps>;
