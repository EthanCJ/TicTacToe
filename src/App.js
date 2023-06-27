import './App.css';
import {setState, useState} from 'react';

function App() {
  const [grid, setGrid] = useState([
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]);

  const [xTurn, setXTurn] = useState(true);
  const [hasWinnerState, setHasWinnerState] =useState(false); //false==no winner true = winner

  const resetGrid = () => setGrid([
     [null,null,null],
     [null,null,null],
     [null,null,null]
  ]);

  const setGridState = (x, y) => {
    if(grid[x][y]==null && !hasWinnerState){
      grid[x][y]= xTurn ? 'X' : 'O';
      setHasWinnerState(checkGameState('X') || checkGameState('O'));
      setXTurn(!xTurn)
    }
  };

  

  function checkGameState(cellState){

    return (
      (cellState===grid[0][0] && cellState===grid[0][1] && cellState===grid[0][2]) || //top row
      (cellState===grid[1][0] && cellState===grid[1][1] && cellState===grid[1][2]) || //middle row
      (cellState===grid[2][0] && cellState===grid[2][1] && cellState===grid[2][2]) || //bottom row
      (cellState===grid[0][0] && cellState===grid[1][0] && cellState===grid[2][0]) || //left column
      (cellState===grid[0][1] && cellState===grid[1][1] && cellState===grid[2][1]) || //middle column
      (cellState===grid[0][2] && cellState===grid[1][2] && cellState===grid[2][2]) || //right column
      (cellState===grid[0][0] && cellState===grid[1][1] && cellState===grid[2][2]) || //diagonal top left to bottome right
      (cellState===grid[0][2] && cellState===grid[1][1] && cellState===grid[2][0])    //diagonal bottom left to top right
    );
  }

  return (
    <div className="App">
        <div>
          <div className='row'>
            <Cell cell={[0,0]} value={grid[0][0]} onClick={() => setGridState(0,0)}/>
            <Cell cell={[0,1]} value={grid[0][1]} onClick={() => setGridState(0,1)}/>
            <Cell cell={[0,2]} value={grid[0][2]} onClick={() => setGridState(0,2)}/>
            </div>
          <div className='row'>
            <Cell cell={[1,0]} value={grid[1][0]} onClick={() => setGridState(1,0)}/>
            <Cell cell={[1,1]} value={grid[1][1]} onClick={() => setGridState(1,1)}/>
            <Cell cell={[1,2]} value={grid[1][2]} onClick={() => setGridState(1,2)}/>
            </div>
          <div className='row'>
            <Cell cell={[2,0]} value={grid[2][0]} onClick={() => setGridState(2,0)}/>
            <Cell cell={[2,1]} value={grid[2][1]} onClick={() => setGridState(2,1)}/>
            <Cell cell={[2,2]} value={grid[2][2]} onClick={() => setGridState(2,2)}/>
            </div>
        </div>
    </div>
  );
}

const Cell = (props) =>{
  return(
      <button type="button" className='TTTButton' onClick={props.onClick}>{props.value}</button>
  )
}


export default App;
