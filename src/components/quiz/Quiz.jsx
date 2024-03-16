import React, { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "Which language runs in a web browser?",
      answerOptions: [
        { answerText: "Javascript", isCorrect: true },
        { answerText: "C", isCorrect: false },
        { answerText: "Python", isCorrect: false },
        { answerText: "HTML", isCorrect: false },
      ],
    },
    {
      questionText: "What is CSS?",
      answerOptions: [
        { answerText: "Cascading Style Sheets", isCorrect: true },
        { answerText: "Central Style Sheets", isCorrect: false },
        { answerText: "Cascading Simple Sheets", isCorrect: false },
        { answerText: "Cars SUVs Sailboats", isCorrect: false },
      ],
    },
    {
      questionText: "What does HTML stand for?",
      answerOptions: [
        { answerText: "Hypertext Markdown Language", isCorrect: false },
        { answerText: "Hyperloop Machine Language", isCorrect: false },
        { answerText: "Hypertext Markup Language", isCorrect: true },
        {
          answerText: "Helicopters Terminals Motorboats Lamborginis",
          isCorrect: false,
        },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                key={answerOption.answerText}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
