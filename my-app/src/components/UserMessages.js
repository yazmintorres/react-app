import { useState } from "react";

export default function UserMessages() {
  // set secretNumber state
  const [secretNum, setSecretNum] = useState(
    Math.floor(Math.random() * 20 + 1)
  );

  // set display state
  const [display, setDisplay] = useState(
    <img src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
  );

  // set message and attempts state
  const [message, setMessage] = useState(<p>Make a guess!</p>);
  const [attempts, setAttempts] = useState(5);

  // display secret number elements
  let displaySecretNumEl = (
    <p
      style={{
        display: "inline-block",
        fontSize: "60px",
        margin: "0px",
        padding: "15px 0",
      }}
    >
      {secretNum}
    </p>
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(attempts);
    let inputValue = e.target.guess.value;
    let gameOn = attempts > 0;
    if (gameOn) {
      if (secretNum === Number(inputValue)) {
        setMessage(
          <>
            <p style={{ color: "green" }}>Correct!</p>
            <p style={{ color: "green" }}>Game Over</p>
          </>
        );
        setDisplay(displaySecretNumEl);
        gameOn = false;
      } else {
        setAttempts((prevValue) => prevValue - 1);
        if (attempts === 1) {
          console.log(inputValue, secretNum, inputValue !== secretNum);
          setMessage(
            <>
              <p style={{ color: "purple" }}>Uh oh, no more chances</p>
              <p style={{ color: "purple" }}>Game Over</p>
            </>
          );
          setDisplay(displaySecretNumEl);
          gameOn = false;
        } else {
          if (secretNum > inputValue) {
            setMessage(<p style={{ color: "red" }}>Too low!</p>);
          } else if (secretNum < inputValue) {
            setMessage(<p style={{ color: "red" }}>Too high!</p>);
          }
        }
      }
    }
    console.log(`guess: ${inputValue}, secret Number: ${secretNum} `);
  }

  return (
    <section id="game" className="container">
      <div id="secret-number-container">
        <p>Secret Number:</p>
        <div id="secret-number">{display}</div>
      </div>
      {message}
      <div id="container">
        <div>
          <p>Guess Number</p>
          <form onSubmit={handleSubmit}>
            <input id="guess" type="number" min="1" max="20" required></input>
            <button type="submit" id="submit">
              Submit
            </button>
          </form>
        </div>
        <div>
          <p>Chances Left</p>
          <div id="chances">{attempts}</div>
        </div>
      </div>
    </section>
  );
}
