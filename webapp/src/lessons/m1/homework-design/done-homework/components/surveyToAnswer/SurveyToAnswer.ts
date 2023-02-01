import * as React from "react";
import { SurveyQuestion } from "../../domain/question";

interface SurveyToAnswerProps {
  topic: string;
  questions: SurveyQuestion[];
}

// renders:
// - ./Question
export declare const SurveyToAnswer: React.FC<SurveyToAnswerProps>;
