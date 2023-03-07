import * as React from "react";
import { IndividualSurvey } from "./IndividualSurvey";

interface IndividualSurveysTabProps {
  answeredSurveyIds: string[];
}

export const IndividualSurveysTab: React.FC<IndividualSurveysTabProps> = (
  props
) => (
  <>
    {/* buttons to switch between surveys */}
    <IndividualSurvey surveyId="1" />
  </>
);
