// this is my parent component that react will render
import "./styles.css";
import Intro from "./app-components/Intro";
import StartGame from "./app-components/StartGame";

export default function App() {
  let title = "Guess Secret Number";
  let instructions =
    "Instructions: guess the number between 1 and 20. You only have 5 chances!";

  return (
    <div id="body-container">
      <Intro title={title} instructions={instructions} />
      <StartGame />
    </div>
  );
}
