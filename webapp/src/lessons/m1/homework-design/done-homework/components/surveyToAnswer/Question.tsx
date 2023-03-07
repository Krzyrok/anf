import * as React from "react";
import {
  AnsweredSurveyMultipleAnswerQuestion,
  AnsweredSurveyOpenEndedQuestion,
  AnsweredSurveyQuestion,
  SurveyQuestionType,
  AnsweredSurveySingleAnswerQuestion,
} from "../../domain/question";

export const Question: React.FC<AnsweredSurveyQuestion> = (props) => {
  if (props.type === SurveyQuestionType.singleAnswer) {
    return <SingleAnswerQuestion {...props} />;
  }

  if (props.type === SurveyQuestionType.multipleAnswer) {
    return <MultipleAnswerQuestion {...props} />;
  }

  return <OpenEndedQuestion {...props} />;
};

type SingleAnswerQuestionProps = AnsweredSurveySingleAnswerQuestion;
declare const SingleAnswerQuestion: React.FC<SingleAnswerQuestionProps>;

type MultipleAnswerQuestionProps = AnsweredSurveyMultipleAnswerQuestion;
declare const MultipleAnswerQuestion: React.FC<MultipleAnswerQuestionProps>;

type OpenEndedQuestionProps = AnsweredSurveyOpenEndedQuestion;
declare const OpenEndedQuestion: React.FC<OpenEndedQuestionProps>;
