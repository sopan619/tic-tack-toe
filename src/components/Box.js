import React from "react";

const Box = ({ value, onClick }) => {
  const style = value === "X" ? "text-red-700" : "text-blue-600";

  return (
    <>
      {/* <div className="py-16 mx-auto overflow-hidden">
        <p className="text-center font-thin pb-5 text-xl font-feroda">
          Tic Tac Toe
        </p>
        <div className="w-[300px] h-[300px] md:w-[370px] md:h-[370px] ml-auto mr-auto font-feroda "> */}
      {/* Here we should start bulding the project of the Main Game */}
      <button
        className={`rounded-[10%] font-feroda shadow-md shadow-slate-400 bg-cyan-50 text-[5em] text-center leading-[5rem] ${style} m-2 w-20 h-20 hover:shadow-lg hover:bg-cyan-100 hover:shadow-slate-500`}
        onClick={onClick}
      >
        {value}
      </button>
      {/* </div>

        {/* This is the Go Back Button, and it's working perfectly with Routes and all, DO NOT TOUCH THIS! */}

      {/* </div> */}
    </>
  );
};

export default Box;
