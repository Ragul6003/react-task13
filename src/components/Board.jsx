
import React, { useState } from "react";

function Board() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleClick = (index) => {
        if (board[index] !== "" || winner) {
            return;
        }

        const newBoard = [...board];
        const currentPlayer = isXTurn ? "X" : "O";

        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const hasWon = winningPatterns.some((pattern) =>
            pattern.every((position) => newBoard[position] === currentPlayer)
        );

        if (hasWon) {
            setWinner(currentPlayer);
        } else if (newBoard.every((cell) => cell !== "")) {
            setWinner("Draw");
        } else {
            setIsXTurn(!isXTurn);
        }
    };

    const restartGame = () => {
        setBoard(Array(9).fill(""));
        setIsXTurn(true);
        setWinner(null);
    };

    return (
        <div className="game-container">
            <h1>XO Game</h1>

            <h2>
                {winner
                    ? winner === "Draw"
                        ? "Game Draw!"
                        : `Player ${winner} Wins!`
                    : `Player ${isXTurn ? "X" : "O"} Turn`}
            </h2>

            <div className="board">
                {board.map((value, index) => (
                    <button
                        className="cell"
                        key={index}
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </button>
                ))}
            </div>

            <button className="restart-btn" onClick={restartGame}>
                Restart Game
            </button>
        </div>
    );
}

export default Board;
