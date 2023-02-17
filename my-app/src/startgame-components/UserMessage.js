import React, { useState } from "react";

import ChancesLeft from "./ChancesLeft";

export default function UserMessage(props) {
  const [message, setMessage] = useState(<p>"Make a guess!"</p>);
  const [attempts, setAttempts] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    setAttempts((prevValue) => prevValue - 1);
    let inputValue = e.target.guess.value;
    if (attempts > 0) {
      if (props.secretNumber > inputValue) {
        setMessage(<p style={{ color: "red" }}>"Too low!"</p>);
      } else if (props.secretNumber < inputValue) {
        setMessage(<p style={{ color: "red" }}>"Too high!"</p>);
      } else {
        setMessage(<p style={{ color: "green" }}>"Correct"</p>);
      }
    } else {
      setMessage(<p style={{ color: "purple" }}>Uh oh, no more chances</p>);
    }
    console.log(`guess: ${inputValue}, secret Number: ${props.secretNumber} `);
  }

  //  store value of input text
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
        <ChancesLeft />
      </div>
    </>
  );
}
