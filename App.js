import React from "react";

class Squere extends React.Component {
  render() {
    return (
      <button className="squere">{this.props.value}</button>
    )
  }
}

class Board extends React.Component {
  renderSquere(i) {
    return <Squere value={i}/>
  }


  render() {
    const status = "Next player 0"

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquere(0)}
          {this.renderSquere(1)}
          {this.renderSquere(2)}
          {this.renderSquere(3)}
          {this.renderSquere(4)}
          {this.renderSquere(5)}
        </div>
        <div className="board-row">
          {this.renderSquere(6)}
          {this.renderSquere(7)}
          {this.renderSquere(8)}
          {this.renderSquere(9)}
          {this.renderSquere(10)}
          {this.renderSquere(11)}
        </div>
        <div className="board-row">
          {this.renderSquere(12)}
          {this.renderSquere(13)}
          {this.renderSquere(14)}
          {this.renderSquere(15)}
          {this.renderSquere(16)}
          {this.renderSquere(17)}
        </div>
        <div className="board-row">
          {this.renderSquere(18)}
          {this.renderSquere(19)}
          {this.renderSquere(20)}
          {this.renderSquere(21)}
          {this.renderSquere(22)}
          {this.renderSquere(23)}
        </div>
        <div className="board-row">
          {this.renderSquere(24)}
          {this.renderSquere(25)}
          {this.renderSquere(26)}
          {this.renderSquere(27)}
          {this.renderSquere(28)}
          {this.renderSquere(29)}
        </div>
        <div className="board-row">
          {this.renderSquere(30)}
          {this.renderSquere(31)}
          {this.renderSquere(32)}
          {this.renderSquere(33)}
          {this.renderSquere(34)}
          {this.renderSquere(35)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    )
  }
}

export default Game;
