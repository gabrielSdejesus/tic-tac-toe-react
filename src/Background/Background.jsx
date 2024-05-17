import React, { useState, useRef, useEffect } from 'react';

function Background() {

    let playerTurn = useRef("X");
    const divPlayer = useRef();
    const divWin = useRef();

    const [board, setBoard] = useState(Array(9).fill(null));

    console.log("renderizou");

    function selectElement(idElementCell) {
        if (board[idElementCell] === null) {
            const newBoard = [...board];
            newBoard[idElementCell] = playerTurn.current;
            setBoard(newBoard);
            checkWin(newBoard);
        }
    }

    function resetGame() {
        setBoard(Array(9).fill(null));
        playerTurn = "X";
        divWin.current.style.display = "none";
        divPlayer.current.style.display = "block";
    }

    function checkWin(board) {
        const combinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6]              // Diagonal
        ];

        for (let combination of combinations) {
            const [a, b, c] = combination;
            if (board[a] === playerTurn.current && board[b] === playerTurn.current && board[c] === playerTurn.current) {
                divWin.current.style.display = "block";
                divPlayer.current.style.display = "none";
                return;
            }
        }

        playerTurn.current === "X" ? playerTurn.current = "O" : playerTurn.current = "X";
    }

    return (
        <div className="game">
            <div ref={divWin} className="status" style={{ display: 'none' }}>Player Win: {playerTurn.current}</div>
            <div ref={divPlayer} className="status">Next player: {playerTurn.current}</div>
            <div className="board">
                {board.map((value, index) => (
                    <div
                        key={index}
                        onClick={() => selectElement(index)}
                        className="cell"
                        id={index.toString()}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <button onClick={resetGame} className="reset">Reset Game</button>
        </div>
    );
}

export default Background;