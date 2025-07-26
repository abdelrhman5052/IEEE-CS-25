import { useState } from "react";
import "./App.css";

const initialBoard = Array(9).fill("");

export default function App() {
  const [board, setBoard] = useState(initialBoard);
  const [xTurn, setXTurn] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState(null);

  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6],            
  ];

  const checkWinner = (newBoard) => {
    for (let combo of winCombos) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[b] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
        setScores((prev) => ({ ...prev, [newBoard[a]]: prev[newBoard[a]] + 1 }));
        return;
      }
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";
    setBoard(newBoard);
    setXTurn(!xTurn);
    checkWinner(newBoard);
  };

  const resetBoard = () => {
    setBoard(initialBoard);
    setWinner(null);
    setXTurn(true);
  };

  const resetAll = () => {
    resetBoard();
    setScores({ X: 0, O: 0 });
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className={`w-20 h-20 text-3xl font-bold border rounded-md
              ${
                cell === "X"
                  ? "text-red-400 border-red-500"
                  : cell === "O"
                  ? "text-blue-400 border-blue-500"
                  : "border-gray-500"
              }
              flex items-center justify-center
            `}
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="flex justify-between w-64 text-center text-lg">
        <div>
          Player 1 (X)
          <br /> Score: {scores.X}
        </div>
        <div>
          Player 2 (O)
          <br /> Score: {scores.O}
        </div>
      </div>

      {winner && (
        <div className="text-xl font-semibold">
          Player {winner === "X" ? "1" : "2"} Wins!
        </div>
      )}

      <div className="flex flex-col gap-3">
        <button
          onClick={resetBoard}
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-700"
        >
          Continue
        </button>
        <button
          onClick={resetAll}
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-700"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}
