
function reload() {
    window.location.reload(false);
}


function Scoreboard() {
    return (
        <>
            <button className="new-game" onClick={reload}>New Game</button>
            <br />
            <p className="horiztl">Status : </p>
            <p className="horiztl" id="status"></p>
            <br />
            <p className="horiztl">Correct Possition :</p>
            <p className="horiztl" id="cpos"></p>
            <br />
            <p className="horiztl">Incorrect Possition  :</p>
            <p className="horiztl" id="inpos"></p>
            <br />
        </>
    )
}
  
export default Scoreboard

