
const colors = [];
const userColors = [];
let tries = 0;
let isPlaying = true;

function getColors() {
  const set = "RGBYPO"
  for (let i = 0; i < 4; i++) {
    colors[i] = set.charAt(Math.floor(Math.random() * 6));
  }
  console.log(colors);                                                  // to comment
}

function setUserColors(clr) {

  if(isPlaying) {
    if (userColors.length < 4) {
      userColors.push(clr);
      const gridPos = document.getElementById(String(tries) + (userColors.length - 1));
      gridPos.className += " " + clr;
    }
    console.log(userColors);                                           // to comment
    if ((userColors.length === 4) & (tries < 10)) {
      compare();
      tries++;

    }
    if (tries >= 10) {
      console.log("Game Over");                                       // to comment
      isPlaying = false;
      const status =  document.getElementById("status");
      status.innerText = " Game Over";
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
      if (ipos.includes(i)) {
        ipos.splice(ipos.indexOf(i),1);
        incorrectPossition--;
      }
      if (pos.length === 4) {
        isPlaying = false;
        const status =  document.getElementById("status");
        status.innerText = " You Won";
        for (let i = 0; i < 4; i++) {
          document.getElementById(i).className += " " + colors[i];
        }
      }
    } else {
      for (let k = 0, j = 0; k < 4 ; k++) {
        if (userColors[i] === colors[k]) {
          if (!(pos.includes(k))) {
            if ((!(ipos.includes(k)) & (j <= rpt))) {
              incorrectPossition++;
              j++;
              ipos.push(k);
              continue;
            }
          }
      }
    }
  }
}
userColors.splice(0, 4);

console.log(correctPossition);                                      // to comment
console.log(incorrectPossition);                                    // to comment

const cposElement =  document.getElementById("cpos");
const inposElement =  document.getElementById("inpos");
cposElement.innerText = correctPossition;
inposElement.innerText = incorrectPossition;

}

console.log("select 4 colors from  R G B Y P O ");                // to comment

function Buttons() {

  return (
    <div className="color-div">
    <button className="R color-btn" onClick={ () => setUserColors("R") } />
    <button className="G color-btn" onClick={ () => setUserColors("G") } />
    <button className="B color-btn" onClick={ () => setUserColors("B") } />
    <br />
    <button className="Y color-btn" onClick={ () => setUserColors("Y") } />
    <button className="P color-btn" onClick={ () => setUserColors("P") } />
    <button className="O color-btn" onClick={ () => setUserColors("O") } />
    <br />
    </div>
  )
}
  
export default Buttons;

