import Home from "./components/Home.jsx";
import Game from "./components/Game.jsx";

import { useState } from "react";
const App = () => {
  const [IsGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };
  return <>{IsGameStarted ? <Game /> : <Home toggle={toggleGame} />};</>;
};


export default App;
