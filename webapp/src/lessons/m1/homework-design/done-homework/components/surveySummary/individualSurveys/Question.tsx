import {
  AnsweredSurveyMultipleAnswerQuestion,
  AnsweredSurveyOpenEndedQuestion,
  AnsweredSurveyQuestion,
  SurveyQuestionType,
  AnsweredSurveySingleAnswerQuestion,
} from "../../../domain/question";

export const AnsweredQuestion: React.FC<AnsweredSurveyQuestion> = (props) => {
  if (props.type === SurveyQuestionType.singleAnswer) {
    return <AnsweredSingleAnswerQuestion {...props} />;
  }

  if (props.type === SurveyQuestionType.multipleAnswer) {
    return <AnsweredMultipleAnswerQuestion {...props} />;
  }

  return <AnsweredOpenEndedQuestion {...props} />;
};

type AnsweredSingleAnswerQuestionProps = AnsweredSurveySingleAnswerQuestion;
declare const AnsweredSingleAnswerQuestion: React.FC<AnsweredSingleAnswerQuestionProps>;

type AnsweredMultipleAnswerQuestionProps = AnsweredSurveyMultipleAnswerQuestion;
declare const AnsweredMultipleAnswerQuestion: React.FC<AnsweredMultipleAnswerQuestionProps>;

type AnsweredOpenEndedQuestionProps = AnsweredSurveyOpenEndedQuestion;
declare const AnsweredOpenEndedQuestion: React.FC<AnsweredOpenEndedQuestionProps>;
