import {
  SurveyMultipleAnswerQuestion,
  SurveyOpenEndedQuestion,
  SurveyQuestion,
  SurveyQuestionType,
  SurveySingleAnswerQuestion,
} from "../../../domain/question";

export const AnsweredQuestion: React.FC<SurveyQuestion> = (props) => {
  if (props.type === SurveyQuestionType.singleAnswer) {
    return <AnsweredSingleAnswerQuestion {...props} />;
  }

  if (props.type === SurveyQuestionType.multipleAnswer) {
    return <AnsweredMultipleAnswerQuestion {...props} />;
  }

  return <AnsweredOpenEndedQuestion {...props} />;
};

type AnsweredSingleAnswerQuestionProps = SurveySingleAnswerQuestion;
declare const AnsweredSingleAnswerQuestion: React.FC<AnsweredSingleAnswerQuestionProps>;

type AnsweredMultipleAnswerQuestionProps = SurveyMultipleAnswerQuestion;
declare const AnsweredMultipleAnswerQuestion: React.FC<AnsweredMultipleAnswerQuestionProps>;

type AnsweredOpenEndedQuestionProps = SurveyOpenEndedQuestion;
declare const AnsweredOpenEndedQuestion: React.FC<AnsweredOpenEndedQuestionProps>;
