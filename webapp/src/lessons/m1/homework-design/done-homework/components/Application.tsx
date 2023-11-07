import * as React from "react";
import { SurveySummary } from "./surveySummary/SurveySummary";
import { SurveyToAnswer } from "./surveyToAnswer/SurveyToAnswer";

const shouldDisplaySummary = true;

export const Application: React.FC = () => {
  if (shouldDisplaySummary) {
    return <SurveySummary surveyId="1" />;
  }

  return <SurveyToAnswer surveyId="1" isNew={true} />;
};
