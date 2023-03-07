import * as React from "react";
import { AnsweredSurvey } from "../../../domain/answeredSurvey";
import { AnsweredQuestion } from "./Question";

interface IndividualSurveyProps {
  surveyId: string;
}
export const IndividualSurvey: React.FC<IndividualSurveyProps> = (props) => {
  const survey = loadSurvey(props.surveyId);

  return (
    <>
      {survey.fillingStartDate}
      {/* calculate filling time based on the fillingStartDate and submissionDate */}
      {/* or if more complicated logic, store that info (or calculate) on BE */}
      {survey.submissionDate}

      {survey.questions.map((question) => (
        <AnsweredQuestion {...question} />
      ))}
    </>
  );
};

declare const loadSurvey: (id: string) => AnsweredSurvey;
