"use client"

import React from 'react'
import Quiz from 'react-quiz-component';

const QuizComponent = () => {
    const quizData = {
        "quizTitle": "Bài test kiểm tra",
        "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "progressBarColor": "#9de1f6",
        "nrOfQuestions": "4",
        "appLocale": {
            "landingHeaderText": "<questionLength> câu hỏi",
            "question": "Câu hỏi",
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
        },
        "questions": [
            {
                "question": "How can you access the state of a component from inside of a member function?",
                "questionType": "text",
                "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
                "answerSelectionType": "single",
                "answers": [
                    "this.getState()",
                    "this.prototype.stateValue",
                    "this.state",
                    "this.values"
                ],
                "correctAnswer": "3",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "20"
            },
            {
                "question": "ReactJS is developed by _____?",
                "questionType": "text",
                "answerSelectionType": "single",
                "answers": [
                    "Google Engineers",
                    "Facebook Engineers"
                ],
                "correctAnswer": "2",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "20"
            },
            {
                "question": "ReactJS is an MVC based framework?",
                "questionType": "text",
                "answerSelectionType": "single",
                "answers": [
                    "True",
                    "False"
                ],
                "correctAnswer": "2",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "10"
            },
            {
                "question": "Which of the following concepts is/are key to ReactJS?",
                "questionType": "text",
                "answerSelectionType": "single",
                "answers": [
                    "Component-oriented design",
                    "Event delegation model",
                    "Both of the above",
                ],
                "correctAnswer": "3",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "30"
            },
            {
                "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                "questionType": "photo",
                "answerSelectionType": "single",
                "answers": [
                    "https://dummyimage.com/600x400/000/fff&text=A",
                    "https://dummyimage.com/600x400/000/fff&text=B",
                    "https://dummyimage.com/600x400/000/fff&text=C",
                    "https://dummyimage.com/600x400/000/fff&text=D"
                ],
                "correctAnswer": "1",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "20"
            },
            {
                "question": "What are the advantages of React JS?",
                "questionType": "text",
                "answerSelectionType": "multiple",
                "answers": [
                    "React can be used on client and as well as server side too",
                    "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
                    "React components have lifecycle events that fall into State/Property Updates",
                    "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
                ],
                "correctAnswer": ["1", "2", "4"],
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "20"
            },
        ]
    }

    return (
        <div className='border-[5px] min-w-[40vw] max-w-[70vw] min-h-[50vh] max-h-[80%] overflow-y-auto border-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Quiz quiz={quizData} shuffleAnswer={true} shuffle={true} />
        </div>
        // </div>
    )
}

export default QuizComponent