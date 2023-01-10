import { useState } from "react";
import "./App.css";

const cardImgs = [
  { src: "/img/boston.jpg" },
  { src: "/img/indiana.jpg" },
  { src: "/img/orlando.png" },
  { src: "/img/nets.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  //shuffle cards

  const shuffleCards = () => {
    const shuffledCards = [...cardImgs, ...cardImgs]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Memory game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div classname="card" key={card.id}>
            <div>
              <img classname="front" src={card.src} alt="card front" />
              <img classname="back" src="img/ball.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
