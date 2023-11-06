export interface QuestionSummaryHeaderProps {
  expectedAnswersCount: number;
  answersCount: number;
  question: string;
}

export const QuestionSummaryHeader: React.FC<QuestionSummaryHeaderProps> = (
  props
) => (
  <>
    {/* title */}
    {props.question}
    {/* subtitle */}
    oczekiwane: {props.expectedAnswersCount} odpowiedzi: {props.answersCount}{" "}
    pominięte: {props.expectedAnswersCount - props.answersCount}
  </>
);
