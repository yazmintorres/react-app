import React, { useState } from "react";

import ChancesLeft from "./ChancesLeft";

export default function UserMessage(props) {
  const [inputValue, setInputValue] = useState(null);
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  //  store value of input text
  return (
    <>
      <p>Message: too high or too low</p>
      <div id="container">
        <div>
          <p>Guess Number</p>
          <form>
            <input
              type="number"
              min="1"
              max="20"
              onChange={handleChange}
            ></input>
            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <ChancesLeft />
      </div>
    </>
  );
}
