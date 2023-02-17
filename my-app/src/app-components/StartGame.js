import { useState } from "react";
import UserMessage from "../startgame-components/UserMessage";

export default function StartGame() {
  const [secretNumber, setSecretNumber] = useState(null);
  function handleClick() {
    setSecretNumber(Math.floor(Math.random() * 20 + 1));
    console.log(secretNumber);
  }
  return (
    <section id="game" className="container">
      <div id="secret-number">
        <p>Secret Number:</p>
        <button id="generate-number" onClick={handleClick}>
          Click Me
        </button>
      </div>
      <UserMessage secretNumber={secretNumber} />
    </section>
  );
}
