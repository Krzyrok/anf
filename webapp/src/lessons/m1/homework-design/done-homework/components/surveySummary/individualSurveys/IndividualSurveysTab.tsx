import * as React from "react";
import { AnsweredSurvey } from "../../../domain/answeredSurvey";

interface IndividualSurveysTabProps {
  answeredSurveys: AnsweredSurvey[];
}

// renders:
// - switch between surveys
// - ./IndividualSurvey
export declare const IndividualSurveysTab: React.FC<IndividualSurveysTabProps>;
