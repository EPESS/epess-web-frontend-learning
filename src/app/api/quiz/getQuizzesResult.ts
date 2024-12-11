import { gql, useQuery } from "@apollo/client";

export type TQuizAttempts = {
    quizAttempts: {
        correctPoints: number
        createdAt: Date
        id: string
        numberOfCorrectAnswers: number
        numberOfIncorrectAnswers: number
        numberOfQuestions: number
        questions: string
        quizId: string
        totalPoints: number
        updatedAt: Date
        userId: string
        userInput: string
        quiz: {
            quizTitle: string
        }
        user: User
    }[]
}

const QUIZZESRESULT = gql`
query QuizAttempts {
    quizAttempts {
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
        quiz {
            quizTitle
        }
        user {
            name
        }
    }
}`

export const useGetQuizzesResult = () => {
    return useQuery<TQuizAttempts>(QUIZZESRESULT)
}