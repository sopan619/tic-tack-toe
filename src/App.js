import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Board from "./components/Board";
import Reset from "./components/Reset";
import Scoreboard from "./components/Scoreboard";
import Welcome from "./components/Welcome";
import turn from "./audio/turn.mp3";
import start from "./audio/start.mp3";
import reset from "./audio/reset.mp3";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  let m = new Audio(turn);
  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    //Plays on Each Click
    m.volume = 0.3;
    m.play();

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        //Plays on Win
        let win = new Audio(start);
        win.volume = 0.7;
        win.play();
        return board[x];
      }
    }
  };
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    // Plays on Board Reset
    let aud = new Audio(reset);
    aud.playbackRate = 1.5;
    aud.volume = 0.2;
    aud.play();
  };

  return (
    <>
      <div className="the-body h-screen w-[100vw] bg-gradient-to-r from-cyan-200 to-cyan-400">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/game"
            element={[
              <Scoreboard scores={scores} xPlaying={xPlaying} />,
              <Board
                board={board}
                onClick={gameOver ? resetBoard : handleBoxClick}
              />,
              <Reset resetBoard={resetBoard} />,
            ]}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
