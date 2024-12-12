import { gql, useQuery } from "@apollo/client";

interface Quiz {
  createdAt: string;
  id: string;
  nrOfQuestions: number;
  progressBarColor: string;
  questions: Question[];
  quizSynopsis: string;
  quizTitle: string;
  serviceId: string;
  updatedAt: string;
}

// export enum IAnswerSelectionType {
//     SINGLE = "SINGLE",
//     MULTIPLE = "MULTIPLE"
// }

interface Question {
  answerSelectionType: string;
  answers: string[];
  correctAnswer: CorrectAnswer;
  createdAt: string;
  explanation: string;
  id: string;
  messageForCorrectAnswer: string;
  messageForIncorrectAnswer: string;
  point: number;
  question: string;
  questionPic: string;
  questionType: string;
  quizId: string;
  updatedAt: string;
}

type CorrectAnswer = StringListType | StringType | string | string[];

export interface StringListType {
  items: string[];
}

export interface StringType {
  value: string;
}

export interface QuizzesResponse {
  quizzes: Quiz[];
}

interface QuizzesVariables {
  serviceId: string;
  scheduleId: string;
}

const QUIZ = gql`
query Quizzes($serviceId: String!, $scheduleId: String) {
  quizzes(serviceId: $serviceId, scheduleId: $scheduleId) {
    nrOfQuestions
    progressBarColor
    questions {
      answerSelectionType
      answers
      correctAnswer {
        ... on StringListType {
          items
        }
        ... on StringType {
          value
        }
      }
      explanation
      messageForCorrectAnswer
      messageForIncorrectAnswer
      point
      question
      questionType
    }
    quizSynopsis
    quizTitle
    id
  }
}`



export const useGetQuizzes = (input: QuizzesVariables) => {
  return useQuery<QuizzesResponse>(QUIZ, {
    variables: input,
    skip: !input
  })
}