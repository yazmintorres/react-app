import React, { useState } from "react";

import ChancesLeft from "./ChancesLeft";

export default function UserMessage(props) {
  console.log(props);
  const [message, setMessage] = useState(<p>"Make a guess!"</p>);
  const [attempts, setAttempts] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    let inputValue = e.target.guess.value;
    if (attempts > 0) {
      setAttempts((prevValue) => prevValue - 1);
      if (props.secretNumber > inputValue) {
        setMessage(<p style={{ color: "red" }}>"Too low!"</p>);
      } else if (props.secretNumber < inputValue) {
        setMessage(<p style={{ color: "red" }}>"Too high!"</p>);
      } else {
        setMessage(<p style={{ color: "green" }}>"Correct"</p>);
      }
    } else {
      props.displaySecretNumber(
        <p
          style={{
            fontSize: "20px",
            display: "inline-block",
            fontSize: "60px",
            margin: "0px",
            padding: "15px 0",
          }}
        >
          {props.secretNumber}
        </p>
      );
      setMessage(<p style={{ color: "purple" }}>Uh oh, no more chances</p>);
    }
    console.log(`guess: ${inputValue}, secret Number: ${props.secretNumber} `);
  }

  return (
    <>
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
        <ChancesLeft attempts={attempts} />
      </div>
    </>
  );
}
