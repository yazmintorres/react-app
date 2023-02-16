// this is my parent component that react will render
import "./styles.css";

export default function App() {
  return (
    <div id="body-container">
      <section id="intro">
        <h1>Guess Secret Number</h1>
        <p>
          Instructions: guess the number between 1 and 20. You only have 5
          chances!
        </p>
      </section>
      <section id="game">
        <div id="secret-number">
          <p>Secret Number:</p>
          <button id="generate-number">Click Me</button>
        </div>
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
    </div>
  );
}
