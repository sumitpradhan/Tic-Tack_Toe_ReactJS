//This Board component renders the Sqaures(Buttons to display which ove has been played on it)
import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";

const Board = ({ squares, xPlay, onPlay }) => {
  const onSquareClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const newSquare = squares.slice();
    if (xPlay) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "O";
    }
    onPlay(newSquare);
  };

  const winner = calculateWinner(squares); // In each render check if there is a winner.
  return (
    <div>
      <div className="tic-tac">
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
      <h1> Current Player :{xPlay ? "X" : "O"}</h1>
      <h1> Winner :{winner}</h1>
    </div>
  );
};

export default Board;
