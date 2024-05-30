import React from "react";
import Button from "./components/button";

const DijkstraView = ({
  gridArray,
  startSquare,
  endSquare,
  visitedNodes,
  shortestPath,
  dimension,
  handleResetClick,
  handleClearClick,
  handleVisualizeClick,
  handleChangeDimension,
  handleStartSquareCoordinateChange,
  handleEndSquareCoordinateChange,
  handleCellHover,
  handleMouseDown,
  handleMouseUp,
  handleCellClick,
}) => {
  const renderGrid = () => {
    return (
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${dimension}, minmax(0, 1fr))`,
        }}
      >
        {createCells}
      </div>
    );
  };

  const createCells = gridArray.map((cell) => {
    const [row, col] = cell.coordinates;
    const isStart = row === startSquare[0] && col === startSquare[1];
    const isEnd = row === endSquare[0] && col === endSquare[1];
    const isVisited = visitedNodes.has(`${row}-${col}`);
    const isInShortestPath = shortestPath.includes(`${row}-${col}`);
    const isObstacle = cell.type === "obstacle";

    let cellClassName = "bg-gray-400 border-2 aspect-square";
    if (isStart) cellClassName = "bg-red-400 border-2 aspect-square";
    if (isEnd) cellClassName = "bg-blue-400 border-2 aspect-square";
    if (isVisited && !isStart && !isEnd && !isInShortestPath)
      cellClassName = "bg-yellow-300 border-2 aspect-square";
    if (isInShortestPath && !isStart && !isEnd)
      cellClassName = "bg-green-400 border-2 aspect-square";
    if (isObstacle) cellClassName = "bg-slate-900 border-2 aspect-square";

    return (
      <button
        key={`${row}-${col}`}
        className={cellClassName}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => handleCellHover(row, col)}
        onClick={() => handleCellClick(row, col)}
      ></button>
    );
  });

  return (
    <div className="lg:mx-auto lg:flex items-center justify-center ">
      <div className="lg:w-1/2 lg:p-20 lg:pt-5">
        {renderGrid()}
        <div className="flex justify-between mx-3 items-center my-2">
          <Button buttonText={"Default"} clickHandler={handleResetClick} />
          <Button buttonText={"Clear"} clickHandler={handleClearClick} />
          <Button
            buttonText={"Visualize"}
            clickHandler={handleVisualizeClick}
          />
        </div>
      </div>

      <div className="px-3 flex flex-col self-start lg:pt-5">
        <header className=" mb-8">
          <h1 className="text-3xl font-bold">Dijkstra's Algorithm</h1>
          <p className="text-lg text-gray-600">
            A shortest path algorithm for finding the shortest paths between
            nodes in a graph.
          </p>
          <p className="text-lg text-gray-600">
            Click on cells to add/remove "obstacles"
          </p>
        </header>
        <form onSubmit={handleChangeDimension}>
          <label
            htmlFor="dimension"
            className="block text-gray-700 text-md font-bold mb-2"
          >
            {" "}
            Dimension (n x n){" "}
          </label>
          <input
            type="number"
            name="dimension"
            max={20}
            className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3"
            required
            placeholder={dimension}
          />
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 border border-gray-400 rounded shadow text-sm"
          >
            Update
          </button>
        </form>

        <form onSubmit={handleStartSquareCoordinateChange} className="mt-3">
          <label
            htmlFor="startsquare"
            className="block text-gray-700 text-md font-bold mb-2"
          >
            {" "}
            Start Coordinates (row,col){" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3"
            type="number"
            name="startSquareRow"
            placeholder={startSquare[0]}
            required
            max={20}
          />
          <input
            className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3"
            type="number"
            name="startSquareCol"
            placeholder={startSquare[1]}
            required
            max={20}
          />
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 border border-gray-400 rounded shadow text-sm"
          >
            Update
          </button>
        </form>

        <form onSubmit={handleEndSquareCoordinateChange} className="mt-3">
          <label
            htmlFor="endsquare"
            className="block text-gray-700 text-md font-bold mb-2"
          >
            {" "}
            End Coordinates(row,col)
          </label>
          <input
            className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3"
            type="number"
            name="endSquareRow"
            placeholder={endSquare[0]}
            required
            max={20}
          />
          <input
            className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3"
            type="number"
            name="endSquareCol"
            placeholder={endSquare[1]}
            required
            max={20}
          />
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 border border-gray-400 rounded shadow text-sm"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default DijkstraView;
