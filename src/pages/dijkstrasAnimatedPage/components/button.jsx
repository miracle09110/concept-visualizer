import React from "react";

const button = ({ buttonText, clickHandler }) => {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      onClick={clickHandler}
    >
      {buttonText}
    </button>
  );
};

export default button;
