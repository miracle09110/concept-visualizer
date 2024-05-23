import React from "react";
import { FaQuestion } from "react-icons/fa";

function MissingPageView() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-100 text-2xl text-center text-neutral-300">
      <span>
        <FaQuestion size={60} />
      </span>
      <span className="my-4 text-5xl font-bold">ERROR 404</span>
      <span className="w-4/5">
        The page you are looking for does not exist.
      </span>
    </div>
  );
}

export default MissingPageView;
