import * as React from "react";
import { IndividualSurvey } from "./IndividualSurvey";

interface IndividualSurveysTabProps {
  answeredSurveyIds: string[];
}

export const IndividualSurveysTab: React.FC<IndividualSurveysTabProps> = (
  props
) => {
  const selectedSurveyNumber = 1;
  const selectedSurveyId = props.answeredSurveyIds[selectedSurveyNumber - 1];

  return (
    <>
      <SurveySwitchButtons
        onSurveyNumberChange={() => {}}
        allSurveysCount={props.answeredSurveyIds.length}
        currentSurveyNumber={selectedSurveyNumber}
      />

      <IndividualSurvey surveyId={selectedSurveyId} />
    </>
  );
};

interface SurveySwitchButtonsProps {
  onSurveyNumberChange: (newNumber: number) => void;
  currentSurveyNumber: number;
  allSurveysCount: number;
}
declare const SurveySwitchButtons: React.FC<SurveySwitchButtonsProps>;
