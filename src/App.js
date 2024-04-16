import { useState } from "react";
import Board from "./Components/Board";

export default function Game() {
  //const [squares, setSquares] = useState(Array(9).fill(null));
  const [xPlay, setXPlay] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const curSquare = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXPlay(!xPlay);
  };

  const jumpMove = (move) => {
    setCurrentMove(move);
    setXPlay(move % 2 === 0);
  };

  const moves = history.map((sqaure, move) => {
    let description = "";
    if (move > 0) {
      description = "Go to Move No:" + move;
    } else {
      description = "Go to start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpMove(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={curSquare} xPlay={xPlay} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
