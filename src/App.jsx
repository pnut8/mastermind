import Grid from './grid.jsx'
import Buttons from './logic.jsx'
import Scoreboard from './score.jsx'

function App() {
  return (
    <>
      <div className='box'>
      <Grid />
      <div className='score-box'>
      <Scoreboard />
      <Buttons />
      </div>
      </div>
    </>
  )
}

export default App
