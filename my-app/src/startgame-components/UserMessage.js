import React, { useState } from "react";

import ChancesLeft from "./ChancesLeft";

export default function UserMessage(props) {
  const [inputValue, setInputValue] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setInputValue(e.target.guess.value);
    console.log(inputValue);
  }

  //  store value of input text
  return (
    <>
      <p>Message: too high or too low</p>
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
