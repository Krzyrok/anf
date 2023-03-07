import * as React from "react";
import { SurveySummary } from "./surveySummary/SurveySummary";

const shouldDisplaySummary = true;

export const Application: React.FC = () => {
  if (shouldDisplaySummary) {
    return <SurveySummary surveyId="1" />;
  }

  // TODO K:
  // - SurveyToAnswer - survey which should be filled by respondent
  return null;
};
