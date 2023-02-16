// this is my parent component that react will render
import "./styles.css";
import Intro from "./app-components/Intro";
import Game from "./app-components/Game";

export default function App() {
  return (
    <div id="body-container">
      <Intro />
      <Game />
    </div>
  );
}
