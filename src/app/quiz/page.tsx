"use client"

import React, { Suspense } from 'react'
import QuizComponent from './components/quiz'
import { useSearchParams } from 'next/navigation';
import { useGetQuizzes } from '@/app/api/quiz';
import ScaleLoader from 'react-spinners/ScaleLoader';

// Create a wrapper component to handle the search params
const QuizPageContent = () => {
    const params = useSearchParams()

    const scheduleId = params.get("scheduleId") ?? ""
    const serviceId = params.get("serviceId") ?? ""

    const { loading, data, error } = useGetQuizzes({ scheduleId, serviceId })

    return (
        loading ? <ScaleLoader className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            : data ? <QuizComponent scheduleId={scheduleId} data={data} /> :
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300 p-10'>
                    {
                        error?.message.includes("User has already taken the quiz") ? <span className='font-bold'>Bạn đã hoàn tất bài kiểm tra dịch vụ này rồi nhé !</span> :
                            <span className='font-bold'>Không có bài kiểm tra vui lòng kiểm tra lại !</span>
                    }
                </div>
    )
}

// Wrap the content in Suspense
const QuizPage = () => {
    return (
        <Suspense fallback={<ScaleLoader className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />}>
            <QuizPageContent />
        </Suspense>
    )
}

export default QuizPage