import Grid from "./grid.jsx";
import Buttons from "./logic.jsx";
import Scoreboard from "./score.jsx";
import { Center } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center>
        <div className="box">
          <Center>
            <p className="title">Mastermind</p>
          </Center>
          <Grid />
          <div className="score-box">
            <Scoreboard />
            <Buttons />
          </div>
        </div>
      </Center>
    </>
  );
}

export default App;
