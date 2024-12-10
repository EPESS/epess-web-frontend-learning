"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from 'lucide-react'

export interface QuizResult {
    numberOfQuestions: number
    numberOfCorrectAnswers: number
    numberOfIncorrectAnswers: number
    questions: Array<{
        question: string
        questionType: string
        answerSelectionType: string
        answers: string[]
        correctAnswer: number[] | string
        explanation: string
        point: string
        questionIndex: number
    }>
    userInput: (number[] | number)[]
    totalPoints: number
    correctPoints: number
    timeTaken?: number | null
}

export default function RenderQuizResults({ defaultResult }: { defaultResult: QuizResult }) {

    const [result, setDefaultResult] = useState<QuizResult>(defaultResult)

    const [openExplanations, setOpenExplanations] = useState<{ [key: number]: boolean }>({})

    const percentageScore = (result.correctPoints / result.totalPoints) * 100

    const toggleExplanation = (questionIndex: number) => {
        setOpenExplanations(prev => ({
            ...prev,
            [questionIndex]: !prev[questionIndex]
        }))
    }

    const isAnswerCorrect = (questionIndex: number, answerIndex: number) => {
        const question = result.questions[questionIndex]
        const userAnswer = result.userInput[questionIndex]

        if (Array.isArray(question.correctAnswer)) {
            return question.correctAnswer.includes(answerIndex) &&
                (Array.isArray(userAnswer) && userAnswer.includes(answerIndex))
        } else {
            return Number(question.correctAnswer) === answerIndex &&
                Number(userAnswer) === answerIndex
        }
    }

    const isAnswerIncorrect = (questionIndex: number, answerIndex: number) => {
        const question = result.questions[questionIndex]
        const userAnswer = result.userInput[questionIndex]

        if (Array.isArray(question.correctAnswer)) {
            return !question.correctAnswer.includes(answerIndex) &&
                (Array.isArray(userAnswer) && userAnswer.includes(answerIndex))
        } else {
            return Number(question.correctAnswer) !== answerIndex &&
                Number(userAnswer) === answerIndex
        }
    }

    const isAnswerSelected = (questionIndex: number, answerIndex: number) => {
        const userAnswer = result.userInput[questionIndex]
        if (Array.isArray(userAnswer)) {
            return userAnswer.includes(answerIndex)
        } else {
            return Number(userAnswer) === answerIndex
        }
    }

    useEffect(() => {
        setDefaultResult(defaultResult)
    }, [defaultResult])

    return (
        result.userInput.length === 0 ? <> </> :
            <div className="container mx-auto px-4 py-8">
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Kết quả bài kiểm tra</CardTitle>
                        <CardDescription>Vui lòng đợi giảng viên tư vấn nhé. Xin cảm ơn !</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg">
                                <h3 className="text-2xl font-bold">{result.numberOfQuestions}</h3>
                                <p className="text-sm text-muted-foreground">Tổng câu hỏi</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg">
                                <h3 className="text-2xl font-bold">{result.numberOfCorrectAnswers}</h3>
                                <p className="text-sm text-muted-foreground">câu trả lời đúng</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg">
                                <h3 className="text-2xl font-bold">{result.correctPoints}/{result.totalPoints}</h3>
                                <p className="text-sm text-muted-foreground">Điểm</p>
                            </div>
                            {/* <div className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg">
                                <h3 className="text-2xl font-bold">{result.timeTaken ? `${result.timeTaken}s` : 'N/A'}</h3>
                                <p className="text-sm text-muted-foreground">Thời gian làm</p>
                            </div> */}
                        </div>
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-2">Tổng điểm</h4>
                            <Progress value={percentageScore} className="w-full" />
                            <p className="text-sm text-muted-foreground mt-2">{percentageScore.toFixed(2)}% Đúng</p>
                        </div>
                    </CardContent>
                </Card>

                <h2 className="text-2xl font-bold mb-4">Chi tiết các câu hỏi</h2>
                {result.questions.map((question, index) => (
                    <Card key={question.questionIndex} className="mb-6">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <span>Câu hỏi {question.questionIndex}</span>
                                {Array.isArray(result.userInput[index])
                                    ? JSON.stringify(result.userInput[index]) === JSON.stringify(question.correctAnswer)
                                    : result.userInput[index].toString() === question.correctAnswer.toString()
                                        ? <CheckCircle className="text-green-500" />
                                        : <XCircle className="text-red-500" />
                                }
                                <span>( {question.point} điểm )</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium mb-2">{question.question}</p>
                            <div className="grid gap-2">
                                {question.answers.map((answer, ansIndex) => (
                                    <div key={ansIndex} className="flex items-center gap-2">
                                        <Badge
                                            variant={
                                                Array.isArray(question.correctAnswer)
                                                    ? question.correctAnswer.includes(ansIndex + 1)
                                                        ? "green"
                                                        : "destructive"
                                                    : !isAnswerIncorrect(index, ansIndex + 1) && Number(question.correctAnswer) === ansIndex + 1
                                                        ? "green"
                                                        : "outline"
                                            }
                                        >
                                            {ansIndex + 1}
                                        </Badge>
                                        <span className={`
                    flex-grow
                    ${isAnswerCorrect(index, ansIndex + 1) ? "text-green-600 font-medium" : ""}
                    ${isAnswerIncorrect(index, ansIndex + 1) ? "text-red-600 font-medium" : ""}
                  `}>
                                            {answer}
                                        </span>
                                        {isAnswerSelected(index, ansIndex + 1) && (
                                            <div className="flex items-center gap-1">
                                                <span>Bạn</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <Button
                                    variant="outline"
                                    className="text-xs"
                                    onClick={() => toggleExplanation(question.questionIndex)}
                                >
                                    {openExplanations[question.questionIndex] ? "Đóng" : "Xem"} giải thích
                                </Button>
                            </div>
                            {openExplanations[question.questionIndex] && (
                                <div className="mt-4 p-4 bg-secondary rounded-lg">
                                    <p className="text-sm">{question.explanation}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
    )
}

