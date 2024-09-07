'use client'
import { useState } from "react";
const quizQuestions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Gujarat", "Karnataka"],
    correctAnswer: "Delhi"
  },
  {
    question: "What is 5 * 5?",
    options: ["20", "24", "25", "30"],
    correctAnswer: "25"
  },
  {
    question: "Which city is called pink city?",
    options: ["Jaipur", "Udaipur", "Nagpur", "Goa"],
    correctAnswer: "Jaipur"
  },
  {
    question: "What is the only living planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Earth"
  },
  {
    question: "Which is the full form of JSX?",
    options: ["Javascript HTML", "Javascript extension", "Javas extension", "Javascript XTML"],
    correctAnswer: "Javascript extension"
  }
];
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showScore, setShowScore] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleAnswerOptionClick = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    } else {
      setAttempts(attempts + 1);
      alert('Wrong answer! Try again.');
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer('');
    setAttempts(0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-300">
      <div className="bg-yellow-200 text-black p-8 rounded-lg shadow-md w-full max-w-md">
        {showScore ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
            <p className="text-lg mb-4">
              You scored {score} out of {quizQuestions.length}
            </p>
            <p className="mb-4 text-red-600 font-semibold">
                And total attempts You have made: {attempts}
              </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleRetry}
            >
              Retry Quiz
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">Quiz Assignment</h1>
            <div className="mb-6">
              <div className="text-lg font-semibold mb-2">
                <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
              </div>
              <div className="text-lg">Q{currentQuestion + 1}. {quizQuestions[currentQuestion].question}</div>
            </div>
            <div className="mb-6">
            
              {quizQuestions[currentQuestion].options.map((option) => (
                <label key={option} className="block mb-2">
                  <input
                    type="radio"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleAnswerOptionClick}
              disabled={!selectedAnswer}
            >
              Submit Answer
            </button>
            
              <div className="p-4 mt-4 rounded-md bg-blue-300">
                <p>
                  Your total score upto now {score}/5
                </p>
              
              {attempts > 0 && (
              <p className="mt-4 text-red-600 font-semibold">
                Total attempts: {attempts}
              </p>
            )}
              </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;