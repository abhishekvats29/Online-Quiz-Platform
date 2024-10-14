import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

const questions = [
  {
    questionText: '1. What is the correct way to declare a variable in JavaScript?',
    answerOptions: [
      { answerText: '1. variable x = 10;', isCorrect: false },
      { answerText: '2. int x = 10;;', isCorrect: false },
      { answerText: '3. var x = 10;', isCorrect: true },
      { answerText: '4. x = 10;', isCorrect: false },
    ],
  },
  {
    questionText: '2. How do you write a conditional statement for executing some statements only if “i” is equal to 5?',
    answerOptions: [
      { answerText: '1. if i==5 then', isCorrect: false },
      { answerText: '2. if (i==5)', isCorrect: true },
      { answerText: '3. if i=5 then', isCorrect: false },
      { answerText: '4. if i=5', isCorrect: false },
    ],
  },
  {
    questionText: '3. Which method is used to update the state of a class component in React?',
    answerOptions: [
      { answerText: '1. this.updateState()', isCorrect: false },
      { answerText: '2. this.modifyState()', isCorrect: false },
      { answerText: '3. this.changeState()', isCorrect: false },
      { answerText: '4. this.setState()', isCorrect: true },
    ],
  },

  {
    questionText: '4. What does JSX stand for in React?',
    answerOptions: [
      { answerText: '1. JavaScript XML', isCorrect: true },
      { answerText: '2. Java Syntax Extension', isCorrect: false },
      { answerText: '3. JSON Xchange Schema', isCorrect: false },
      { answerText: '4. JavaScript Xerography', isCorrect: false },
    ],
  },
  {
    questionText: '5. Which lifecycle method is invoked immediately after a component is rendered to the DOM?',
    answerOptions: [
      { answerText: '1. componentDidMount', isCorrect: true },
      { answerText: '2. componentDidUpdate', isCorrect: false },
      { answerText: '3. componentWillMount', isCorrect: false },
      { answerText: '4. componentWillRender', isCorrect: false },
    ],
  },
  
  
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswerOptionClick(false);
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(30); // Reset timer for next question
    } else {
      setShowScore(true);
      navigate('/result', { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className="timer">Time left: {timeLeft} seconds</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
