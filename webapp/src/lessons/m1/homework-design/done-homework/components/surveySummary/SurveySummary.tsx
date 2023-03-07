import * as React from "react";
import { SurveySummaryReport } from "../../domain/surveySummaryReport";
import { SurveyAnswersSummaryTab } from "./surveyAnswersSummary/SurveyAnswersSummaryTab";

export const SurveySummary: React.FC<SurveySummaryReport> = (props) => (
  <>
    {props.topic}
    <SurveyAnswersSummaryTab {...props} />
    {/* TODO K: */}
    {/* IndividualSurveysTab */}
  </>
);
