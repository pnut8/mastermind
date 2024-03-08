import { Button } from '@chakra-ui/react'

const colors = [];
const userColors = [];
let tries = 0;
let isPlaying = true;
let isWon = false;

const answer = () => {
  const elements = [];
  for (let i = 0; i < 4; i++) {
    elements.push(<div key={i} id={i} className="color-box"></div>);
  }
  return elements;
}


function getColors() {
  const set = "RGBYPO"
  for (let i = 0; i < 4; i++) {
    colors[i] = set.charAt(Math.floor(Math.random() * 6));
  }
  // console.log(colors);                                                  // to comment
}

function setUserColors(clr) {

  if(isPlaying) {
    if (userColors.length < 4) {
      userColors.push(clr);
      const gridPos = document.getElementById(String(tries) + (userColors.length - 1));
      gridPos.className += " " + clr;
    }
    // console.log(userColors);                                           // to comment
    if ((userColors.length === 4) && (tries < 10)) {
      compare();
      tries++;
      document.getElementById("tries").innerText = tries;
    }
    if ((tries >= 10) && (!isWon) ) {
      // console.log("Game Over");                                       // to comment
      isPlaying = false;
      const status =  document.getElementById("status");
      status.innerText = " You Lose";
      for (let i = 0; i < 4; i++) {
        document.getElementById(i).className += " " + colors[i];
      }
    }
  }
}

getColors();

function compare() {

  const pos = [];
  const ipos = [];
  let correctPossition = 0;
  let incorrectPossition = 0;

  for (let i = 0; i < 4; i++) {

    let rpt = 0;
    for (let l = 0; l < 4; l++) {
      if (userColors[i] === userColors[l]) {
        rpt++;
      }
    }

    if (userColors[i] === colors[i]) {
      pos.push(i);
      correctPossition++;
      // console.log(userColors[i]);                            //to comment
      if (ipos.includes(i)) {
        ipos.splice(ipos.indexOf(i),1);
        incorrectPossition--;
      }
      if (pos.length === 4) {
        isPlaying = false;
        const status =  document.getElementById("status");
        status.innerText = " You Won";
        isWon = true;
        for (let i = 0; i < 4; i++) {
          document.getElementById(i).className += " " + colors[i];
        }
      }
    } else {
      for (let k = 0, j = 0; k < 4 ; k++) {
        if (userColors[i] === colors[k]) {
          if (!(pos.includes(k))) {
            if (!(ipos.includes(k))) {
              if (j < rpt) {
                incorrectPossition++;
                j++;
                ipos.push(k);
                // console.log(userColors[i], incorrectPossition, j, rpt);   //to comment
                continue;
            }}
          }
      }
    }
  }
}
userColors.splice(0, 4);

// console.log(correctPossition);                                      // to comment
// console.log(incorrectPossition);                                    // to comment

const cposElement =  document.getElementById("cpos");
const inposElement =  document.getElementById("inpos");
cposElement.innerText = correctPossition;
inposElement.innerText = incorrectPossition;

}

// console.log("select 4 colors from  R G B Y P O ");                // to comment

function Buttons() {

  return (
    <>
    <div className="color-div">
    <p className="slt-btns-info">Select Colors :</p>
    <center>
    <Button colorScheme='red' className="R color-btn select-button" onClick={ () => setUserColors("R") } />
    <Button colorScheme='green' className="G color-btn select-button" onClick={ () => setUserColors("G") } />
    <Button colorScheme='blue' className="B color-btn select-button" onClick={ () => setUserColors("B") } />
    <br /> 
    <Button colorScheme='yellow' className="Y color-btn select-button" onClick={ () => setUserColors("Y") } />
    <Button colorScheme='purple' className="P color-btn select-button" onClick={ () => setUserColors("P") } />
    <Button colorScheme='orange' className="O color-btn select-button" onClick={ () => setUserColors("O") } />
    <br />
    </center>
    </div>
    <h4 className="correct-order">Correct Order : </h4>
    <br />
    <div className="ans-div">
    { answer() }
    </div>
    </>
  )
}
  
export default Buttons;

