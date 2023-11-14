import React, { useState } from 'react';
import './aa.css'; 

const questions = [
  {
    id: 1,
    question: 'A?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
  },
  {
    id: 2,
    question: 'B?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'B',
  },
  {
    id: 3,
    question: 'C?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'C',
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {

      alert('Правильно)');
    } else {

      setIncorrectAnswersCount((count) => count + 1);

      if (incorrectAnswersCount >= 2) {

        alert('Натисніть на кнопку показати відповідь');
      } else {
        alert('Непраивльно');
      }
    }

    // Скидання обраних відповідей після кожної перевірки
    setSelectedAnswer('');
  };

  const handleViewCorrectAnswer = () => {
    alert(`Правильна відповідь: ${questions[currentQuestion].correctAnswer}`);
  };

  const handleNextQuestion = () => {
    setIncorrectAnswersCount(0);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <div className="app">
      <h1>Вікторина!</h1>
      {currentQuestion < questions.length ? (
        <>
          <div className="question">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelection(option)}
                  className={selectedAnswer === option ? 'selected' : ''}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="actions">
            <button onClick={handleCheckAnswer}>Перевірити відповідь</button>
            {incorrectAnswersCount >= 3 && (
              <button onClick={handleViewCorrectAnswer}>Показати відповідь</button>
            )}
            <button onClick={handleNextQuestion}>Наступне питання</button>
          </div>
        </>
      ) : (
        <p>Вітаю, ти пройшов тест</p>
      )}
    </div>
  );
};

export default App;