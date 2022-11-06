import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[70vh] lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl text-cyan-900 font-extrabold sm:text-6xl">
              Tic Tac Toe
              <strong className=" sm:text-5xl font-extrabold text-red-600 sm:block">
                The Classic
              </strong>
            </h1>

            <p className="mt-4 sm:text-sm sm:leading-relaxed">
              Tic-tac-toe, noughts and crosses, or Xs and Os is a
              paper-and-pencil game for two players who take turns marking the
              spaces in a three-by-three grid with X or O. The player who
              succeeds in placing three of their marks in a horizontal,
              vertical, or diagonal row is the winner.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-cyan-800 px-12 py-3 text-sm font-medium text-cyan-100 shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                to="/game"
              >
                Let's Play!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
