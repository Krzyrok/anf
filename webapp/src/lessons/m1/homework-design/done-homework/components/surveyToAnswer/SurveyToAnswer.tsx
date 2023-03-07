import * as React from "react";
import { SurveyToEdit as SurveyToEditDto } from "../../domain/surveyToAnswer";
import { NewSurvey as NewSurveyDto } from "../../domain/newSurveyToAnswer";
import { Question } from "./Question";

interface SurveyToAnswerProps {
  surveyId: string;
  isNew: boolean;
}

export const SurveyToAnswer: React.FC<SurveyToAnswerProps> = (props) => {
  if (props.isNew) {
    return <NewSurveyToAnswer surveyId={props.surveyId} />;
  }
  return <SurveyToEdit surveyId={props.surveyId} />;
};

interface SurveyToEditProps {
  surveyId: string;
}
const SurveyToEdit: React.FC<SurveyToEditProps> = (props) => {
  const survey = loadSurveyToEdit(props.surveyId);

  return (
    <>
      {survey.topic}
      {survey.questions.map((question) => (
        <Question {...question} />
      ))}
    </>
  );
};
declare const loadSurveyToEdit: (surveyId: string) => SurveyToEditDto;

interface NewSurveyToAnswer {
  surveyId: string;
}
const NewSurveyToAnswer: React.FC<NewSurveyToAnswer> = (props) => {
  const survey = loadNewSurveyToAnswer(props.surveyId);

  return (
    <>
      {survey.topic}
      {survey.questions.map((question) => (
        <Question {...question} />
      ))}
    </>
  );
};
declare const loadNewSurveyToAnswer: (surveyId: string) => NewSurveyDto;
