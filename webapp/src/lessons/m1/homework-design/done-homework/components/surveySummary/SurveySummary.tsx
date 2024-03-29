import * as React from "react";
import { SurveySummaryReport } from "../../domain/surveySummaryReport";
import { IndividualSurveysTab } from "./individualSurveys/IndividualSurveysTab";
import { SurveyAnswersSummaryTab } from "./surveyAnswersSummary/SurveyAnswersSummaryTab";
import { SurveyTopic } from "../topic/Topic";
import { Id } from "../../domain/infrastructure/id";

interface SurveySummaryProps {
  surveyId: Id;
}

export const SurveySummary: React.FC<SurveySummaryProps> = (props) => {
  const survey = loadSurveySummaryReport(props.surveyId);
  return (
    <>
      <SurveyTopic topic={survey.topic} />
      {/* switching between tabs */}
      <SurveyAnswersSummaryTab {...survey} />
      <IndividualSurveysTab answeredSurveyIds={survey.answeredSurveysIds} />
    </>
  );
};

declare const loadSurveySummaryReport: (surveyId: Id) => SurveySummaryReport;
