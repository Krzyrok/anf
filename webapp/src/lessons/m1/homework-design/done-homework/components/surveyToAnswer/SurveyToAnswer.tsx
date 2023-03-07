import * as React from "react";
import { SurveyToEdit as SurveyToEditDto } from "../../domain/surveyToAnswer";
import { NewSurvey as NewSurveyDto } from "../../domain/newSurveyToAnswer";
import { Question } from "./Question";

interface SurveyToAnswerProps {
  surveyId: string;
  isNew: boolean;
}

export const SurveyToAnswer: React.FC<SurveyToAnswerProps> = (props) => {
  const survey = props.isNew
    ? mapNewSurveyToFormData(loadNewSurveyToAnswer(props.surveyId))
    : loadSurveyToEdit(props.surveyId);
  return <SurveyToAnswerContent {...survey} />;
};

declare const loadSurveyToEdit: (surveyId: string) => SurveyToEditDto;

type SurveyToAnswerContentProps = SurveyToEditDto;
const SurveyToAnswerContent: React.FC<SurveyToAnswerContentProps> = (
  survey
) => (
  <>
    {survey.topic}
    {survey.questions.map((question) => (
      <Question {...question} />
    ))}
  </>
);
declare const loadNewSurveyToAnswer: (surveyId: string) => NewSurveyDto;
declare const mapNewSurveyToFormData: (survey: NewSurveyDto) => SurveyToEditDto;
