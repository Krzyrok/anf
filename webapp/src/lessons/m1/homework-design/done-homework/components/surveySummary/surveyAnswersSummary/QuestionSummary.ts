import * as React from "react";

interface AnswerSummary {
  answer: string;
}

// zastanowić się na podstawie survey-summary PDF
// TODO K:
interface QuestionSummaryProps {
  question: string;
  answers: AnswerSummary[];
  respondentsNumber: number;
}

// renders:
// - TODO K:
export declare const QuestionSummary: React.FC<QuestionSummaryProps>;
