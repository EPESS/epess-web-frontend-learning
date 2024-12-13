"use client"

import React from 'react'
import Quiz from 'react-quiz-component';
import RenderQuizResults, { TQuiz } from './quizResult';
import { QuizzesResponse, StringListType } from '@/app/api/quiz';
import { useSubmitQuiz } from '@/app/api/quiz/submitQuiz';

export const handleReceiveResult = (result: TQuiz) => {
    return <RenderQuizResults defaultResult={result} key={result.toString()} />
}

const QuizComponent = ({ data, scheduleId }: { data: QuizzesResponse | undefined, scheduleId: string | undefined }) => {

    const appLocale = {
        "landingHeaderText": "<questionLength> câu hỏi",
        "question": "Câu hỏi",
        "timerTimeRemaining": "Thời gian còn lại",
        "timerTimeTaken": "Thời gian làm bài",
        "startQuizBtn": "Bắt đầu làm bài",
        "resultFilterAll": "Tất cả",
        "resultFilterCorrect": "Đúng",
        "marksOfQuestion": "( <marks> điểm )",
        "resultFilterIncorrect": "Sai",
        "resultFilterUnanswered": "Chưa trả lời",
        "resultPagePoint": 'Số điểm đạt <correctPoints> trên tổng <totalPoints>.',
        "prevQuestionBtn": "Trước",
        "nextQuestionBtn": "Sau",
        "pickNumberOfSelection": "<numberOfSelection> câu trả lời",
        "singleSelectionTagText": "Chọn 1 đáp án",
        "multipleSelectionTagText": "Chọn nhiều đáp án",
        "resultPageHeaderText": "Bạn đã hoàn thành xong bài test. Bạn đạt được <correctIndexLength> trên <questionLength> câu hỏi."
    }


    const [submitQuiz, { loading: loadingSubmit }] = useSubmitQuiz()

    const quizzesData = JSON.parse(JSON.stringify(data?.quizzes[0] ?? ""))

    const questionsData = quizzesData?.questions?.map((question) => {
        if (question.questionType === "TEXT") {
            question.questionType = "text"
        } else {
            question.questionType = "photo"
        }

        if (question.answerSelectionType === "SINGLE") {
            question.answerSelectionType = "single"
            question.correctAnswer = (question.correctAnswer as StringListType).items[0]


            return question
        } else {
            question.answerSelectionType = "multiple"
            question.correctAnswer = (question.correctAnswer as StringListType).items
            return question
        }
    })

    const convertedQuizzesData = { ...quizzesData, questions: questionsData, appLocale }

    const handleComplete = (result: TQuiz) => {

        if (loadingSubmit) return

        delete result.timeTaken

        submitQuiz({
            variables: {
                ...result,
                quizId: data?.quizzes[0].id ?? "",
                scheduleId: scheduleId ?? "",
                questions: Object.assign({}, result.questions),
                userInput: Object.assign({}, result.userInput)
            }
        })
    }



    return (
        <div className='border-[5px] min-w-[40vw] max-w-[70vw] min-h-[50vh] max-h-[80%] overflow-y-auto border-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Quiz onComplete={handleComplete} quiz={convertedQuizzesData} enableProgressBar={true} showDefaultResult={false} customResultPage={handleReceiveResult} shuffleAnswer={true} shuffle={true} />
        </div>
    )
}

export default QuizComponent