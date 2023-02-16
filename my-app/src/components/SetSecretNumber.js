import { useState } from "react";
import Message from "./Message";

export default function SetSecretNumber() {
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
      <Message secretNumber={secretNumber} />
    </section>
  );
}
