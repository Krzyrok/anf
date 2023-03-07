import * as React from "react";
import {
  AnsweredSurveyMultipleAnswerQuestion,
  AnsweredSurveyOpenEndedQuestion,
  SurveyQuestionType,
  AnsweredSurveySingleAnswerQuestion,
  NewSurveySingleAnswerQuestion,
  NewSurveyMultipleAnswerQuestion,
  NewSurveyOpenEndedQuestion,
} from "../../domain/question";

type QuestionProps =
  | SingleAnswerQuestionProps
  | MultipleAnswerQuestionProps
  | OpenEndedQuestionProps;

export const Question: React.FC<QuestionProps> = (props) => {
  if (props.type === SurveyQuestionType.singleAnswer) {
    return <SingleAnswerQuestion {...props} />;
  }

  if (props.type === SurveyQuestionType.multipleAnswer) {
    return <MultipleAnswerQuestion {...props} />;
  }

  return <OpenEndedQuestion {...props} />;
};

type SingleAnswerQuestionProps = NewSurveySingleAnswerQuestion &
  Partial<Pick<AnsweredSurveySingleAnswerQuestion, "selectedAnswerId">>;
declare const SingleAnswerQuestion: React.FC<SingleAnswerQuestionProps>;

type MultipleAnswerQuestionProps = NewSurveyMultipleAnswerQuestion &
  Partial<Pick<AnsweredSurveyMultipleAnswerQuestion, "selectedAnswerIds">>;
declare const MultipleAnswerQuestion: React.FC<MultipleAnswerQuestionProps>;

type OpenEndedQuestionProps = NewSurveyOpenEndedQuestion &
  Partial<Pick<AnsweredSurveyOpenEndedQuestion, "answer">>;
declare const OpenEndedQuestion: React.FC<OpenEndedQuestionProps>;
