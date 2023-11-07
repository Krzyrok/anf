import * as React from "react";
import { AnsweredSurvey } from "../../../domain/answeredSurvey";
import { AnsweredQuestion } from "./Question";
import { Id } from "../../../domain/infrastructure/id";

interface IndividualSurveyProps {
  surveyId: Id;
}
export const IndividualSurvey: React.FC<IndividualSurveyProps> = (props) => {
  const survey = loadSurvey(props.surveyId);

  return (
    <>
      Wypełniono: <DateTimeFormatter dateTime={survey.submissionDate} />
      Czas trwania:{" "}
      <TimeSpanFormatter
        startDate={survey.fillingStartDate}
        endDate={survey.submissionDate}
      />
      {survey.questions.map((question) => (
        <AnsweredQuestion {...question} />
      ))}
    </>
  );
};

declare const loadSurvey: (id: Id) => AnsweredSurvey;

interface DateTimeFormatterProps {
  dateTime: Date;
}
declare const DateTimeFormatter: React.FC<DateTimeFormatterProps>;

interface TimeSpanFormatterProps {
  startDate: Date;
  endDate: Date;
}
declare const TimeSpanFormatter: React.FC<TimeSpanFormatterProps>;
