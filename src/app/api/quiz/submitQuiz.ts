import { Quiz } from "@/app/quiz/components/quizResult";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

export type SubmitQuizResponse = {
    submitQuiz: {
        correctPoints: number;
        createdAt: string;
        id: string;
        numberOfCorrectAnswers: number;
        numberOfIncorrectAnswers: number;
        numberOfQuestions: number;
        questions: string[];
        quizId: string;
        totalPoints: number;
        updatedAt: string;
        userId: string;
        userInput: string[];
    };
};


const SUBMITQUIZ = gql`
mutation SubmitQuiz (
        $correctPoints: Int
        $numberOfCorrectAnswers: Int
        $numberOfIncorrectAnswers: Int
        $numberOfQuestions: Int
        $questions: [String!]
        $totalPoints: Int
        $userInput: [String!]
    )
     {
  submitQuiz(
    data: {
      correctPoints:  $correctPoints
      numberOfCorrectAnswers: $numberOfCorrectAnswers
      numberOfIncorrectAnswers: $numberOfIncorrectAnswers
      numberOfQuestions: $numberOfQuestions
      questions: $questions
      totalPoints: $totalPoints
      userInput: $userInput
    }
  ) {
    correctPoints
    createdAt
    id
    numberOfCorrectAnswers
    numberOfIncorrectAnswers
    numberOfQuestions
    questions
    quizId
    totalPoints
    updatedAt
    userId
    userInput
  }
}
`

export const useSubmitQuiz = () => {
    return useMutation<SubmitQuizResponse, Quiz>(SUBMITQUIZ, {
        onCompleted: () => {
            toast("Nộp bài thành công. Vui lòng đợi giảng viên tư vấn lộ trình học nhé !")
        },
        onError: () => {
            toast("Nộp bài thất bại. Vui lòng liên hệ nền tảng để biết thêm chi tiết !")
        }
    })
}