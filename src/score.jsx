import { Button } from "@chakra-ui/react";

function reload() {
  window.location.reload(false);
}

function Scoreboard() {
  return (
    <>
      <center>
        <Button colorScheme="green" className="new-game" onClick={reload}>
          New Game
        </Button>
      </center>
      <br />
      <div className="game-state">
        <p className="horiztl">Status : </p>
        <p className="horiztl" id="status">
          ----
        </p>
      </div>
      <br />
      <p className="horiztl">Tries &nbsp;&nbsp;: </p>
      <p className="horiztl" id="tries">
        {" "}
        0
      </p>
      <br />
      <p className="horiztl">Correct Possition &nbsp;&nbsp;:</p>
      <p className="horiztl" id="cpos"></p>
      <br />
      <p className="horiztl">Incorrect Possition :</p>
      <p className="horiztl" id="inpos"></p>
      <br />
    </>
  );
}

export default Scoreboard;
