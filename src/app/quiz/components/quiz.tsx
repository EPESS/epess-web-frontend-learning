"use client"

import React from 'react'
import Quiz from 'react-quiz-component';
import RenderQuizResults from './quizResult';
import { useSearchParams } from 'next/navigation';
import { StringListType, useGetQuizzes } from '@/app/api/quiz';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useSubmitQuiz } from '@/app/api/quiz/submitQuiz';

const QuizComponent = () => {

    const params = useSearchParams()

    const scheduleId = params.get("scheduleId") ?? ""
    const serviceId = params.get("serviceId") ?? ""

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

    const { loading, data } = useGetQuizzes({ scheduleId, serviceId })

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

    const handleReceiveResult = (result: Quiz) => {
        return <RenderQuizResults defaultResult={result} key={result.toString()} />
    }

    const handleComplete = (result: Quiz) => {

        if (loadingSubmit) return

        delete result.timeTaken

        submitQuiz({
            variables: result
        })

        console.log("result", result);

    }

    return (
        <div className='border-[5px] min-w-[40vw] max-w-[70vw] min-h-[50vh] max-h-[80%] overflow-y-auto border-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            {loading
                ?
                <ScaleLoader className='p-10' />
                :
                <Quiz onComplete={handleComplete} quiz={convertedQuizzesData} enableProgressBar={true} showDefaultResult={false} customResultPage={handleReceiveResult} shuffleAnswer={true} shuffle={true} />
            }
        </div>
    )
}

export default QuizComponent