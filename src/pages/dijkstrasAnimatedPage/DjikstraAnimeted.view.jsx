import React from "react";

const createGridArray = (numberOfRows, numberOfColumns) => {
  const grid = [];
  for (let row = 0; row < numberOfRows; row++) {
    for (let column = 0; column < numberOfColumns; column++) {
      grid.push([row, column]);
    }
  }

  return grid;
};

const displayGridFromArray = (array) => {
  const startSquare = [8, 3];
  const endSquare = [3, 8];

  return (
    <div className="grid grid-cols-10 ">
      {array.map((arrayItem) => {
        const [row, col] = arrayItem;

        if (row === startSquare[0] && col === startSquare[1]) {
          return (
            <div
              key={`${row}-${col}`}
              className="bg-red-400 border-2 aspect-square place-content-center text-center"
              id={`${row}${col}`}
            >
              Start
            </div>
          );
        }

        if (row === endSquare[0] && col === endSquare[1]) {
          return (
            <div
              key={`${row}-${col}`}
              className="bg-blue-400 border-2 aspect-square place-content-center text-center"
              id={`${row}${col}`}
            >
              End
            </div>
          );
        }
        return (
          <div
            key={`${row}-${col}`}
            className="bg-gray-400 border-2 aspect-square"
            id={`${row}${col}`}
          ></div>
        );
      })}
    </div>
  );
};

const grid = createGridArray(10, 10);
const displayGrid = displayGridFromArray(grid);
const DjikstraAnimatedView = () => {
  return <div className=" mx-auto  w-1/2">{displayGrid}</div>;
};

export default DjikstraAnimatedView;
