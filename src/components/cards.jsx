// Cards.jsx
import React, { useState, useEffect } from 'react';

const Cards = ({ card, flipped, setFlipped, handleNextCard }) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    if (userInput.toLowerCase() === card.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  // Add useEffect to flip the card back when it's changed
  useEffect(() => {
    if (flipped) {
      // If flipped is true, flip the card back after 3 seconds
      const timeout = setTimeout(() => {
        setFlipped(false);
      }, 3000); // 3 seconds delay, adjust as needed
      return () => clearTimeout(timeout);
    }
  }, [flipped, setFlipped]);

  useEffect(() => {
    // Reset userInput and isCorrect when card changes
    setUserInput('');
    setIsCorrect(null);
  }, [card]);

  return (
    <div className="card-container">
      <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-content">
          <div className="card-front">
            <h2>{card.question}</h2>
          </div>
          <div className="card-back">
            <p>{card.answer}</p>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter your guess..."
          className="answer-input"
        />
        <button onClick={handleSubmit} className="submit-button">Submit</button>
      </div>
      {isCorrect && <p className="feedback-correct">Correct!</p>}
      {isCorrect === false && <p className="feedback-incorrect">Incorrect!</p>}
    
    </div>
  );
};

export default Cards;
