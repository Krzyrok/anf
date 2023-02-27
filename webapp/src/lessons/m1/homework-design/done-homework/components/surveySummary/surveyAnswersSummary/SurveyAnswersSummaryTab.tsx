import * as React from "react";
import { AnsweredSurvey } from "../../../domain/answeredSurvey";

// types shape depends on:
// - if we want to make calculation on FE to display the data
//    (quick implementation; storing only data on BE about the survey shape and the answers)
//    then we can use single type shape (domain) shared between SurveyAnswersSummaryTab and IndividualSurveysTab
//    what is presented below. We get all the data on the start and display it without delay (only data
//    processing must to be done on FE so performance depends on the data amount and user hardware)
//    THIS approach was implemented below because it was quicker
//
// - if we predict a lot of answers, data manipulation, then data processing can be done on BE.
//    With every new answer, new read model will be prepared. In such case, there will be no common
//    type on FE between SurveyAnswersSummaryTab and IndividualSurveysTab
//
// or optimize that and do that on BE
interface SurveyAnswersSummaryTabProps {
  answeredSurveys: AnsweredSurvey[];
}

// renders:
// - TODO K:
export declare const SurveyAnswersSummaryTab: React.FC<SurveyAnswersSummaryTabProps>;
