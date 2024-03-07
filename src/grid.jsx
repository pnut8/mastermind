
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


  
function Grid() {

  return (
    <>
    <div className='container'>
      { grid() }
    </div>
    </>
  )
}
  
export default Grid
