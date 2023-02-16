// this is my parent component that react will render
import "./styles.css";
import Intro from "./components/Intro";
import SecretNumber from "./components/SetSecretNumber";
import { useState } from "react";
import SetSecretNumber from "./components/SetSecretNumber";

export default function App() {
  let title = "Guess Secret Number";
  let instructions =
    "Instructions: guess the number between 1 and 20. You only have 5 chances!";

  return (
    <div id="body-container">
      <Intro title={title} instructions={instructions} />
      <SetSecretNumber />
    </div>
  );
}
