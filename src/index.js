import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// We change this class into a function component as it only contains a render method.
// class Square extends React.Component {
//     render() {
//       return (
//         <button 
//         className="square" 
//         onClick={() => this.props.onClick()}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }

function Square(props) {
    return (
        <button 
        className="square"
        onClick={props.onClick}
        style={{background: (props.isWinner ? 'green' : 'white')}}
        > {props.value}
        </button>
    )
}

function calculateWinner(squares) {
    // all possible victories
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],  
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b]
            && squares[a] === squares[c]) {
                return {result: squares[a], winners: lines[i]}
        }
    }

    return null;
}
  
class Board extends React.Component {
renderSquare(i) {
    let isWinner = false
    if (this.props.winner) {
      if (this.props.winner.winners.includes(i)) {
        isWinner = true
      }
    } else {
      isWinner = false
    }
  
    return (
      <Square 
      value={this.props.squares[i]}
      onClick = {() => this.props.onClick(i)} // can call it anything, Square is not a DOM element.
      isWinner = {isWinner}
      />
    );
}

render() {
    return (
    <div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
    </div>
    );

}
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i) {
    // Avoid mutation because:
    // 1. complex features become simple.
    // 2. detecting changes (copy with orig)
    // 3. determining when to re-render in react.
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // creates a copy of the squares array.
    if (calculateWinner(squares) || squares[i]) {
      // return if already winner or square is filled.
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }


  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 
        'Go to move #' + move : 
        'Go to game start';
      return (
        <li key={move} >
          <button 
          style={{'fontWeight': (this.state.stepNumber === move ? 'bold' : 'normal') }}
          onClick={() =>
            this.jumpTo(move)
          }>{desc}</button>
        </li>
      )
    })


    let status;
    if (winner) {
        status = "Winner: " + winner.result;
    } else if (current.squares.every(element => element != null)) {
      status = "It's a Draw!"
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
    <div className="game">
        <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
          winner={calculateWinner(current.squares)}
        />
        </div>
        <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
        </div>
    </div>
    );
  }
}

// ========================================

ReactDOM.render(
<Game />,
document.getElementById('root')
);
  