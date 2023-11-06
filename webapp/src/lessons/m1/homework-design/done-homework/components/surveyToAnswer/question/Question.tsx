import * as React from "react";
import {
  AnsweredSurveyQuestion,
  SurveyQuestionType,
} from "../../../domain/question";
import { SingleAnswerQuestion } from "./SingleAnswerQuestion";
import { MultipleAnswerQuestion } from "./MultipleAnswerQuestion";
import { OpenEndedQuestion } from "./OpenEndedQuestion";

export const Question: React.FC<AnsweredSurveyQuestion> = (props) => {
  if (props.type === SurveyQuestionType.singleAnswer) {
    return <SingleAnswerQuestion {...props} />;
  }

  if (props.type === SurveyQuestionType.multipleAnswer) {
    return <MultipleAnswerQuestion {...props} />;
  }

  return <OpenEndedQuestion {...props} />;
};
