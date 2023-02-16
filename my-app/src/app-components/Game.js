import React from "react";
import SecretNumber from "../game-components/SecretNumber";

export default function Game() {
  return (
    <section id="game">
      <SecretNumber />
      <p>Message: too high or too low</p>
      <div id="container">
        <div class="user-cards">
          <p>Guess Number</p>
          <form>
            <input type="text"></input>
            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div class="user-cards">
          <p>Chances Left</p>
          <div id="chances">5</div>
        </div>
      </div>
    </section>
  );
}
