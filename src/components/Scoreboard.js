import React from "react";
import "./ScoreBoard.css";

const Scoreboard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="pt-10">
      <div className="scoreboard font-feroda">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>
          X - {xScore}
        </span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>
          O - {oScore}
        </span>
      </div>
    </div>
  );
};

export default Scoreboard;
