"use client"

import React, { useState } from 'react'
import { useGetQuizzesResult } from '../api/quiz/getQuizzesResult'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { getVNTime } from '@/lib/utils'
import { useGetQuizResult } from '../api/quiz'
import { handleReceiveResult } from '../quiz/components'
import { TQuiz } from '../quiz/components/quizResult'
import { useMe } from '@/hooks/use-me'

const QuizResults = () => {

  const me = useMe()

  const [quizAttemptId, setQuizAttemptId] = useState("")

  const { loading, data } = useGetQuizzesResult()

  const { loading: quizAttemptLoading, data: quizAttempt } = useGetQuizResult(quizAttemptId)

  const handleConvertToArray = (input: string) => {
    if (input) return JSON.parse(input).map(obj => Object.values(obj))[0]

  }

  const convertedQuizAttemptQuestion = handleConvertToArray(quizAttempt?.quizAttempt?.questions as unknown as string)
  const convertedQuizAttemptUserInput = handleConvertToArray(quizAttempt?.quizAttempt?.userInput as unknown as string)

  const newData = {
    ...quizAttempt?.quizAttempt,
    userInput: convertedQuizAttemptUserInput,
    questions: convertedQuizAttemptQuestion
  }

  const quizzesResult = data?.quizAttempts

  const handleChooseQuizAttempt = (quizId: string) => {
    setQuizAttemptId(quizId)
  }

  return (
    <div className='relative p-10 h-screen'>
      {loading ? <ScaleLoader className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' /> :
        <div className='h-full overflow-y-auto grid grid-cols-3 gap-10'>
          <div className=' border-2 border-gray-300 col-span-1 p-5 rounded-md flex h-full flex-col gap-1'>
            <h1 className='text-[18px] font-bold'>Các bài kiểm tra đã làm của {me.user?.role === "CENTER_MENTOR" ? "học viên" : "bạn"}</h1>
            <div className='flex flex-col gap-1'>
              {quizzesResult ? quizzesResult?.map((quiz, index) => (
                <div onClick={() => handleChooseQuizAttempt(quiz.id)} className='flex flex-col lg:flex-row items-start border border-gray-300 rounded-md py-2 px-4 hover:bg-slate-400/30 cursor-pointer' key={quiz.id + index}>
                  <div className='flex-1'>
                    <div className='flex items-center gap-1'>
                      <span className='font-bold mr-2'>Học viên:</span>
                      <span>{quiz.user.name}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <span className='font-bold mr-2'>Tiêu đề:</span>
                      <span>{quiz.quiz.quizTitle}</span>
                    </div>
                    <div>
                      <span className='mr-2 font-bold'>
                        Ngày làm bài:
                      </span>
                      <span>{getVNTime(quiz.createdAt)}</span>
                    </div>
                  </div>
                  <div>
                    <span className='mr-2'>
                      Điểm:
                    </span>
                    <span className='text-red-600'>
                      {quiz.correctPoints}/{quiz.totalPoints}đ
                    </span>
                  </div>
                </div>
              ))
                : <p className='text-center'>Bạn chưa có bài kiểm tra nào</p>
              }
            </div>
          </div>
          <div className='col-span-2 h-full overflow-y-auto'>
            <div className='relative w-full'>
              {quizAttemptLoading ? <ScaleLoader className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' /> :
                newData && quizAttemptId ?
                  handleReceiveResult(newData as TQuiz)
                  : <></>
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default QuizResults