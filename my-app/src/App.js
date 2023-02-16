// this is my parent component that react will render
import "./styles.css";
import Intro from "./components/Intro";
import Game from "./components/Game";

export default function App() {
  return (
    <div id="body-container">
      <Intro />
      <Game />
    </div>
  );
}
