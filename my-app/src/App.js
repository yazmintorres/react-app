// this is my parent component that react will render
import "./styles.css";

export default function App() {
  return (
    <div id="body-container">
      <section id="intro">
        <h1>Hello</h1>
        <p>
          Instructions: guess the number between 1 and 20. You only have 5
          chances!
        </p>
      </section>
      <section id="game">
        <button id="generate-number">Generate random number</button>
        <p>Message: too high or too low</p>
        <div id="container">
          <div class="user-cards">
            <p>Guess Number</p>
            <input type="text"></input>
            <button>Submit</button>
          </div>
          <div class="user-cards">
            <p>Chances Left</p>
            <div>Input number of chances left</div>
          </div>
        </div>
      </section>
    </div>
  );
}
