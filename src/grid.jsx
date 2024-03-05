
const grid = () => {

  const elements = [];
  for(let i = 0; i < 10; i++) {
    let j = 0;
    while(j < 4) {
      elements.push(<div key={String(i)+j} id={String(i)+j} className='color-box'></div>);
      j++;
    }
    elements.push(<br key={String(i)+(j-1)+"br"}/>); 
  }
  return elements;
}

const answer = () => {
  const elements = [];
  for (let i = 0; i < 4; i++) {
    elements.push(<div key={i} id={i} className="color-box"></div>);
  }
  return elements;
}
  
function Grid() {

  return (
    <>
    <div className='container'>
      { grid() }
      <h4 className="correct-order">Correct Order : </h4>
      { answer() }
    </div>
    </>
  )
}
  
export default Grid
