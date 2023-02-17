import { useState } from "react";
import UserMessage from "../startgame-components/UserMessage";

export default function StartGame() {
  const [secretNumber, setSecretNumber] = useState(() =>
    Math.floor(Math.random() * 20 + 1)
  );

  const [message, setMessage] = useState(
    <img src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
  );

  return (
    <section id="game" className="container">
      <div id="secret-number-container">
        <p>Secret Number:</p>
        <div id="secret-number">{message}</div>
      </div>
      <UserMessage secretNumber={secretNumber} />
    </section>
  );
}
