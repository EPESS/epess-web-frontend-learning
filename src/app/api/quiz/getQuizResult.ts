import { TQuiz } from "@/app/quiz/components/quizResult";
import { gql, useQuery } from "@apollo/client";

const QUIZRESULT = gql`
query QuizAttempt ($id:String!) {
    quizAttempt(id: $id) {
        correctPoints
        numberOfCorrectAnswers
        numberOfIncorrectAnswers
        numberOfQuestions
        questions    
        totalPoints
        userInput
    }
}`

export const useGetQuizResult = (id: string) => {
    return useQuery<{ quizAttempt: TQuiz }>(QUIZRESULT, { variables: { id }, skip: !id })
}