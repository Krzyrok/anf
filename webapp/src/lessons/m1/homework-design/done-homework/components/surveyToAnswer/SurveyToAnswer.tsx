import * as React from "react";
import { SurveyToEdit as SurveyToEditDto } from "../../domain/surveyToAnswer";
import { NewSurvey as NewSurveyDto } from "../../domain/newSurveyToAnswer";
import { Question } from "./question/Question";
import { SurveyTopic } from "../topic/Topic";

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
    <SurveyTopic topic={survey.topic} />
    {survey.questions.map((question) => (
      <Question {...question} />
    ))}
  </>
);
declare const loadNewSurveyToAnswer: (surveyId: string) => NewSurveyDto;
// I map here to some FormData.
// For now, I assumed EditDto because I want to add an option to edit answers.
// If this is not needed, then we can leave NewSurveyDto.
// Alternatively, we can create SurveyToEditForm but it would be the same as SurveyToEditDto but with optional answers
// (we can achieve similar thing with union type but it will be a little bit harder of the usage in the code -
// before `answer` property access, we would need to check type first (if it is Edit or New)).
declare const mapNewSurveyToFormData: (survey: NewSurveyDto) => SurveyToEditDto;
