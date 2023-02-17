// this is my parent component that react will render
import "./styles.css";
import Intro from "./components/Intro";
import UserMessages from "./components/UserMessages";

export default function App() {
  let title = "Guess Secret Number";
  let instructions =
    "Instructions: guess the number between 1 and 20. You only have 5 chances!";

  return (
    <div id="body-container">
      <Intro title={title} instructions={instructions} />
      <UserMessages />
    </div>
  );
}
