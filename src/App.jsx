// App.jsx
import React, { useState, useRef } from 'react';
import Cards from './components/cards';

function App() {
  const [cards, setCards] = useState([
    { question: 'Who is the GOAT of football?', answer: 'Lionel Messi' },
    { question: 'Who won the most World Cups?', answer: 'Brazil' },
    { question: 'Who has won the most Ballon d\'Or awards?', answer: 'Lionel Messi' },
    { question: 'Which footballer has the most career goals?', answer: 'Pele' },
    { question: 'Which club has won the most UEFA Champions League titles?', answer: 'Real Madrid' },
    { question: 'Who is the all-time top scorer of the FIFA World Cup?', answer: 'Miroslav Klose' },
    { question: 'Which country won the first ever FIFA World Cup in 1930?', answer: 'Uruguay' },
    { question: 'Who is the fastest footballer in the world?', answer: 'Kylian Mbappé' },
    { question: 'Who is the manager with the most UEFA Champions League titles?', answer: 'Zinedine Zidane' },
    { question: 'Which footballer has the most assists in Premier League history?', answer: 'Ryan Giggs' },
  ]);
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false); // Add flipped state

  const handleNextCard = () => {
    const nextIndex = (currentCardIndex + 1) % cards.length;
    setCurrentCardIndex(nextIndex);
    setFlipped(false); // Reset flip state to show the question side
  };

  const handlePrevCard = () => {
    const prevIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    setCurrentCardIndex(prevIndex);
    setFlipped(false); // Reset flip state to show the question side
  };

  const handleShuffleCards = () => {
    const shuffledCards = shuffleArray(cards);
    setCards(shuffledCards);
    setCurrentCardIndex(0);
    setFlipped(false); // Reset flip state to show the question side
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  

  return (
    <div className="App">
      <h1>Football Cards</h1>
      <div className="heading-sub">
        <h>Football Trivia!! Test your knowledge</h>
        <h3>Total Number of Cards: {cards.length}</h3>
      </div>
      <Cards card={cards[currentCardIndex]} flipped={flipped} setFlipped={setFlipped} /> {/* Pass flipped state and setter */}
      <div className="button-container">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
      <button onClick={handleShuffleCards} className="shuffle-button">Shuffle</button>
    </div>
  );
}

export default App;