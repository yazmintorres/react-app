// this is my parent component that react will render
import "./styles.css";
import Intro from "./components/Intro";

export default function App() {
  return (
    <div id="body-container">
      <Intro />
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
