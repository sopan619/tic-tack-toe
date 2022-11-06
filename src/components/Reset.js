import React from "react";
import { Link } from "react-router-dom";

const Reset = ({ resetBoard }) => {
  return (
    <>
      <div className="flex justify-center">
        <button
          className="bg-cyan-800 text-cyan-100 text-2xl font-feroda font-thin rounded-lg py-2 px-4 mt-10 hover:bg-cyan-500 hover:text-cyan-900  hover:shadow-lg hover:shadow-zinc-500"
          onClick={resetBoard}
        >
          Reset
        </button>
      </div>
      <Link to="/">
        <a
          class="inline-block ml-[45%] md:ml-[48.5%]  mt-20 rounded-full border border-indigo-600 bg-cyan-700 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="/download"
        >
          <span class="sr-only"> Download </span>

          <svg
            class="h-5 w-5 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
        <p className="text-center">Go Back</p>
      </Link>
    </>
  );
};

export default Reset;
