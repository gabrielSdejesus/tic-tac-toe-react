import React, {useState} from 'react';

function Background(){

    const [playerTurn, setPlayerTurn] = useState("X");
    const [board, setBoard] = useState([]);

    function selectElement(idElementCell){

        if(board[idElementCell] === undefined) {
            let newBoard = board;
            newBoard[idElementCell] = playerTurn;
            setBoard(newBoard);

            document.getElementById(idElementCell).innerText = playerTurn;
            setPlayerTurn(playerTurn == "X" ? "0" : "X");
        }
    }

    function resetGame(){
        setBoard([]);
        document.querySelectorAll('.cell').forEach(cell =>{
            cell.innerText = "";
        });
    }

    return(
        <div className="game">
        <div className="status">Next player: {playerTurn}</div>
        <div className="board">
            <div onClick={() => selectElement(0)} className="cell" id="0"></div>
            <div onClick={() => selectElement(1)} className="cell" id="1"></div>
            <div onClick={() => selectElement(2)} className="cell" id="2"></div>
            <div onClick={() => selectElement(3)} className="cell" id="3"></div>
            <div onClick={() => selectElement(4)} className="cell" id="4"></div>
            <div onClick={() => selectElement(5)} className="cell" id="5"></div>
            <div onClick={() => selectElement(6)} className="cell" id="6"></div>
            <div onClick={() => selectElement(7)} className="cell" id="7"></div>
            <div onClick={() => selectElement(8)} className="cell" id="8"></div>
        </div>
        <button onClick={resetGame} className="reset">Reset Game</button>
    </div>
    )
}

export default Background;