import React from "react";
import Box from "./Box";

const Board = ({ board, onClick }) => {
  return (
    <>
      <div
        className="grid place-items-center justify-center pt-10"
        style={{ gridTemplateColumns: "repeat(3, 6rem)" }}
      >
        {board.map((value, idx) => {
          return (
            <Box value={value} onClick={() => value === null && onClick(idx)} />
          );
        })}
      </div>
    </>
  );
};

export default Board;
