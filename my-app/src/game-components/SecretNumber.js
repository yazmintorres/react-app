import React from "react";

export default function SecretNumber() {
  let [secretNumber, setSecretNumber] = React.useState(null);
  function handleClick() {
    setSecretNumber(Math.floor(Math.random() * 20 + 1));
    console.log(secretNumber);
  }
  return (
    <div id="secret-number">
      <p>Secret Number:</p>
      <button id="generate-number" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
