import {
  MultipleAnswerQuestionAnswerSummaryReport,
  SurveyMultipleAnswerQuestionAnswersSummaryReport,
} from "../../../../domain/surveySummaryReport";
import { QuestionSummaryHeader } from "../QuestionSummaryHeader";
import { getAnswersCount } from "../answersCount";
import { WithRespondentsNumber } from "../respondentsNumber";

type MultipleAnswerQuestionSummaryProps =
  SurveyMultipleAnswerQuestionAnswersSummaryReport & WithRespondentsNumber;

export const MultipleAnswerQuestionSummary: React.FC<
  MultipleAnswerQuestionSummaryProps
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
      <MultipleAnswerQuestionSummaryTable answers={answers} />
      <MultipleAnswerQuestionSummaryGraph answers={answers} />
    </>
  );
};

declare const mapAnswerSummaryReportsToVisualizationData: (
  answerReports: MultipleAnswerQuestionAnswerSummaryReport[]
) => TableSingleAnswerVisualizationData[];

type SingleAnswerVisualizationData =
  MultipleAnswerQuestionAnswerSummaryReport & {
    percentage: number;
  };

interface SummaryVisualizationData {
  answers: SingleAnswerVisualizationData[];
}

type TableSingleAnswerVisualizationData = SingleAnswerVisualizationData & {
  notSelectedCount: number;
};
type MultipleAnswerQuestionSummaryTableProps = {
  answers: TableSingleAnswerVisualizationData[];
};
declare const MultipleAnswerQuestionSummaryTable: React.FC<MultipleAnswerQuestionSummaryTableProps>;

type MultipleAnswerQuestionSummaryGraphProps = SummaryVisualizationData;
declare const MultipleAnswerQuestionSummaryGraph: React.FC<MultipleAnswerQuestionSummaryGraphProps>;
