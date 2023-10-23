import * as React from "react";
import { SurveyQuestionType } from "../../../domain/question";
import {
  QuestionAnswersSummaryReport,
  SingleAnswerQuestionAnswerSummaryReport,
  SurveyMultipleAnswerQuestionAnswersSummaryReport,
  SurveyOpenEndedQuestionAnswersSummaryReport,
  SurveySingleAnswerQuestionAnswersSummaryReport,
} from "../../../domain/surveySummaryReport";

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

interface WithRespondentsNumber {
  respondentsNumber: number;
}

type SingleAnswerQuestionSummaryProps =
  SurveySingleAnswerQuestionAnswersSummaryReport & WithRespondentsNumber;

const SingleAnswerQuestionSummary: React.FC<
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

type MultipleAnswerQuestionSummaryProps =
  SurveyMultipleAnswerQuestionAnswersSummaryReport & WithRespondentsNumber;
const MultipleAnswerQuestionSummary: React.FC<
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

type OpenEndedQuestionSummaryProps =
  SurveyOpenEndedQuestionAnswersSummaryReport & WithRespondentsNumber;

const OpenEndedQuestionSummary: React.FC<OpenEndedQuestionSummaryProps> = (
  props
) => (
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

interface QuestionSummaryHeaderProps {
  expectedAnswersCount: number;
  answersCount: number;
  question: string;
}
const QuestionSummaryHeader: React.FC<QuestionSummaryHeaderProps> = (props) => (
  <>
    {/* title */}
    {props.question}
    {/* subtitle */}
    oczekiwane: {props.expectedAnswersCount} odpowiedzi: {props.answersCount}{" "}
    pominięte: {props.expectedAnswersCount - props.answersCount}
  </>
);

type Answer = Pick<SingleAnswerQuestionAnswerSummaryReport, "selections">;
const getAnswersCount = (answers: Answer[]) =>
  answers
    .map((answer) => answer.selections)
    .reduce((sum, current) => sum + current, 0);
