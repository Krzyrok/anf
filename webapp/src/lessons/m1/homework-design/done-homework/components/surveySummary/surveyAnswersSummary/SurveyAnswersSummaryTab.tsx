import * as React from "react";
import { SurveySummaryReport } from "../../../domain/surveySummaryReport";
import { QuestionSummary } from "./QuestionSummary";

// types shape depends on:
// - if we want to make calculation on FE to display the data
//    (quick implementation; storing only data on BE about the survey shape and the answers)
//    then we can use single type shape (domain) shared between SurveyAnswersSummaryTab and IndividualSurveysTab.
//    We get all the data on the start and display it without delay (only data
//    processing must to be done on FE so performance depends on the data amount and user hardware)
//
// - if we predict a lot of answers, then data processing can be done on BE.
//    With every new answer:
//      - new read model can be be prepared (some event based architecture)
//        - more time consuming development phase + eventual consistency
//        - but more performant during read request;
//      - or read model can be recalculated "on-the-fly" - whenever query request will be done,
//        then BE will prepare new data based on the actual DB
//    In such case, there will be no common type on FE between SurveyAnswersSummaryTab and IndividualSurveysTab
//    This was implemented below (derived type but it can be split completely at any moment)

type SurveyAnswersSummaryTabProps = Pick<
  SurveySummaryReport,
  "allRespondentsCount" | "questionsAnswersSummaries"
>;

export const SurveyAnswersSummaryTab: React.FC<SurveyAnswersSummaryTabProps> = (
  props
) => (
  <>
    {props.questionsAnswersSummaries.map((summary) => (
      <QuestionSummary
        {...summary}
        respondentsNumber={props.allRespondentsCount}
      />
    ))}
  </>
);
