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

  const resetGame = () => {
    setGrid([
     [null,null,null],
     [null,null,null],
     [null,null,null]]
    );
    setXTurn(true);
    setHasWinnerState(false);
  }

  const setGridState = (x, y) => {
    if(grid[x][y]==null && !hasWinnerState){
      grid[x][y]= xTurn ? 'X' : 'O';
      setHasWinnerState(checkGameState('X') || checkGameState('O'));
      setXTurn(!xTurn)
    }
  };

  

  function checkGameState(cellState){
    const lines =[
      [[0,0],[0,1],[0,2]],//top row
      [[1,0],[1,1],[1,2]],//middle row
      [[2,0],[2,1],[2,2]],//bottom row
      [[0,0],[1,0],[2,0]],//left column
      [[0,1],[1,1],[2,1]],//middle column
      [[0,2],[1,2],[2,2]],//right column
      [[0,0],[1,1],[2,2]],//diagonal top left to bottome right
      [[2,0],[1,1],[0,2]],//diagonal bottom left to top right
    ];

    for(var x=0; x<lines.length;x++){
      console.log();
      if(grid[lines[x][0][0]][lines[x][0][1]]!=null && grid[lines[x][0][0]][lines[x][0][1]]===grid[lines[x][1][0]][lines[x][1][1]] && grid[lines[x][1][0]][lines[x][1][1]]===grid[lines[x][2][0]][lines[x][2][1]]){
        //Draw line code here
        return true;
      }
    }

    return false;
    
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
        <button onClick={resetGame}>Reset</button>
    </div>
  );
}

const Cell = (props) =>{
  function drawLine(direction){
    //0= sideways 1= vertical 2=diagonal top left bottom right 3=diagonal bottom left top right

  }

  return(
      <button type="button" className='TTTButton' onClick={props.onClick}>
        {props.value}
      </button>
  )
}


export default App;
