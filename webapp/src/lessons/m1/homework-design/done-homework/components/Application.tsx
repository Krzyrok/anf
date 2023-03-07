import * as React from "react";
import { SurveySummaryReport } from "../domain/surveySummaryReport";
import { SurveySummary } from "./surveySummary/SurveySummary";

const shouldDisplaySummary = true;

export const Application: React.FC<SurveySummaryReport> = (props) => {
  if (shouldDisplaySummary) {
    return <SurveySummary {...props} />;
  }

  // TODO K:
  // - SurveyToAnswer - survey which should be filled by respondent
  return null;
};
