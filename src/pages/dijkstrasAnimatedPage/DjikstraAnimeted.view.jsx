import React, { useState, useEffect } from "react";

const DijkstraAnimatedView = () => {
  const [gridArray, setGridArray] = useState([]);
  const [startSquare, setStartSquare] = useState([10, 5]);
  const [endSquare, setEndSquare] = useState([15, 18]);
  const [visitedNodes, setVisitedNodes] = useState(new Set());
  const [shortestPath, setShortestPath] = useState([]);
  const [isAnimatingPath, setIsAnimatingPath] = useState(false);
  const [dimension, setDimension] = useState(20);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const createGridArray = (numberOfRows, numberOfColumns) => {
    const grid = [];
    for (let row = 0; row < numberOfRows; row++) {
      for (let column = 0; column < numberOfColumns; column++) {
        grid.push({ coordinates: [row, column], type: "cell" });
      }
    }
    return grid;
  };

  useEffect(() => {
    const grid = createGridArray(dimension, dimension);
    setGridArray(grid);
  }, []);

  const dijkstra = () => {
    const graph = {}; // Construct graph with neighbors (adjacency list)
    for (const cell of gridArray) {
      const [row, col] = cell.coordinates;
      if (cell.type === "obstacle") {
        graph[`${row}-${col}`] = [];
        continue; // Skip adding neighbors for obstacles
      }
      const neighbors = [];
      const numberOfColumns = dimension;
      const indexTop = (row - 1) * numberOfColumns + col;
      const indexBottom = (row + 1) * numberOfColumns + col;
      const indexLeft = row * numberOfColumns + (col - 1);
      const indexRight = row * numberOfColumns + (col + 1);

      if (row > 0 && gridArray[indexTop].type !== "obstacle")
        neighbors.push(`${row - 1}-${col}`); // Top neighbor

      if (row < dimension - 1 && gridArray[indexBottom].type !== "obstacle")
        neighbors.push(`${row + 1}-${col}`); // Bottom neighbor

      if (col > 0 && gridArray[indexLeft].type !== "obstacle")
        neighbors.push(`${row}-${col - 1}`); // Left neighbor

      if (col < dimension - 1 && gridArray[indexRight].type !== "obstacle")
        neighbors.push(`${row}-${col + 1}`); // Right neighbor

      graph[`${row}-${col}`] = neighbors;
    }
    const distances = {}; // Distances from startSquare to each node
    const previous = {}; // Previous node in the shortest path
    for (const cell of gridArray) {
      const [row, col] = cell.coordinates;
      const key = `${row}-${col}`;
      distances[key] =
        key === `${startSquare[0]}-${startSquare[1]}` ? 0 : Infinity;
      previous[key] = null;
    }

    const unvisited = new Set(Object.keys(distances));

    const animateDijkstra = () => {
      const animate = setInterval(() => {
        if (unvisited.size === 0) {
          clearInterval(animate);
          traceShortestPath(`${endSquare[0]}-${endSquare[1]}`);
        }

        let currentNode = null;
        let minDistance = Infinity;
        for (const node of unvisited) {
          if (distances[node] < minDistance) {
            currentNode = node;
            minDistance = distances[node];
          }
        }

        if (currentNode === null) return;
        unvisited.delete(currentNode);
        setVisitedNodes((prevNodes) => new Set([...prevNodes, currentNode]));

        if (currentNode === `${endSquare[0]}-${endSquare[1]}`) {
          clearInterval(animate);
          traceShortestPath(currentNode); // Trigger path tracing
        }

        for (const neighbor of graph[currentNode] || []) {
          const [neighborRow, neighborCol] = neighbor.split("-");
          const neighborKey = `${neighborRow}-${neighborCol}`;
          const distance = distances[currentNode] + 1;
          if (distance < distances[neighborKey]) {
            distances[neighborKey] = distance;
            previous[neighborKey] = currentNode;
          }
        }
      }, 10); // Adjust animation speed (in milliseconds)
    };

    const traceShortestPath = (endNode) => {
      const path = [];
      let current = endNode;
      while (current !== null) {
        path.unshift(current);
        current = previous[current];
      }
      setShortestPath(path);
      animateShortestPath(path); // Initiate path animation
    };

    animateDijkstra();
  };

  const animateShortestPath = (path) => {
    setIsAnimatingPath(true);
    let index = 0;
    const animatePath = setInterval(() => {
      if (index >= path.length) {
        clearInterval(animatePath);
        setIsAnimatingPath(false);
        return;
      }

      const currentNode = path[index];
      setVisitedNodes((prevNodes) => new Set([...prevNodes, currentNode]));
      index++;
    }, 10); // Adjust animation speed (in milliseconds)
  };

  const handleResetClick = () => {
    setStartSquare([10, 5]);
    setEndSquare([15, 18]);
    setDimension(20);
    setVisitedNodes(new Set());
    setShortestPath([]);
    setIsAnimatingPath(false);
    const grid = createGridArray(20, 20);
    setGridArray(grid);
    renderGrid();
  };

  const handleVisualizeClick = () => {
    setVisitedNodes(new Set());
    setShortestPath([]);
    setIsAnimatingPath(false);
    dijkstra();
  };

  const handleClearClick = () => {
    setVisitedNodes(new Set());
    setShortestPath([]);
    setIsAnimatingPath(false);
    setGridArray(gridArray);
  };

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

  const handleCellHover = (row, col) => {
    if (isMouseDown) {
      handleCellClick(row, col);
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
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

  const handleCellClick = (row, col) => {
    if (row === startSquare[0] && col === startSquare[1]) return;
    if (row === endSquare[0] && col === endSquare[1]) return;
    const updatedGrid = gridArray.map((cell) => {
      const [cellRow, cellCol] = cell.coordinates;
      if (cellRow === row && cellCol === col) {
        return {
          ...cell,
          type: cell.type === "obstacle" ? "cell" : "obstacle",
        };
      }
      return cell;
    });
    setGridArray(updatedGrid);
    renderGrid();
  };

  const handleChangeDimension = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newDimension = data.get("dimension");
    setDimension(newDimension);
    const newGrid = createGridArray(newDimension, newDimension);
    setGridArray(newGrid);

    setVisitedNodes(new Set());
    setShortestPath([]);

    renderGrid();
  };

  const handleStartSquareCoordinateChange = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const startSquareRow = data.get("startSquareRow");
    const startSquareCol = data.get("startSquareCol");
    setStartSquare([+startSquareRow, +startSquareCol]);
    setGridArray(gridArray);

    const grid = createGridArray(dimension, dimension);
    setGridArray(grid);
    renderGrid();
  };

  const handleEndSquareCoordinateChange = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const endSquareRow = data.get("endSquareRow");
    const endSquareCol = data.get("endSquareCol");
    setEndSquare([+endSquareRow, +endSquareCol]);
    setGridArray(gridArray);
    e.target.reset();

    const grid = createGridArray(dimension, dimension);
    setGridArray(grid);
    renderGrid();
  };

  return (
    <div
      className="lg:mx-auto lg:flex items-center justify-center "
    >
      <div className="lg:w-1/2 lg:p-20">
        {renderGrid()}
        <div className="flex justify-between mx-3 items-center my-2">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleResetClick}
          >
          Default
          </button>

          <button
            className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleClearClick}
          >
            Clear
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleVisualizeClick}
            disabled={isAnimatingPath}
          >
            Visualize
          </button>
        </div>
      </div>

      <div className="px-3 flex flex-col self-start lg:pt-20">
      <header className=" mb-8">
        <h1 className="text-3xl font-bold">Dijkstra's Algorithm</h1>
        <p className="text-lg text-gray-600">A shortest path algorithm for finding the shortest paths between nodes in a graph.</p>
        <p className="text-lg text-gray-600">Click on cells to add/remove "obstacles"</p>
    </header>
      <form onSubmit={handleChangeDimension}>
      <label htmlFor="dimension" className="block text-gray-700 text-md font-bold mb-2"> Dimension (n x n) </label>
        <input type="number" name="dimension" max={20} className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3" required placeholder={dimension}/>
        <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 border border-gray-400 rounded shadow text-sm">Update</button>
      </form>

      <form onSubmit={handleStartSquareCoordinateChange} className="mt-3">
        <label htmlFor="startsquare" className="block text-gray-700 text-md font-bold mb-2"> Start Coordinates (row,col) </label>
        <input className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3" type="number" name="startSquareRow" placeholder={startSquare[0]} required max={20}/>
        <input className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3" type="number" name="startSquareCol" placeholder={startSquare[1]} required max={20}/>
        <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 border border-gray-400 rounded shadow text-sm">Update</button>
      </form>

      <form onSubmit={handleEndSquareCoordinateChange} className="mt-3">
        <label htmlFor="endsquare" className="block text-gray-700 text-md font-bold mb-2"> End Coordinates(row,col)</label>
        <input  className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3" type="number" name="endSquareRow" placeholder={endSquare[0]} required max={20}/>
        <input  className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3" type="number" name="endSquareCol" placeholder={endSquare[1]} required max={20}/>
        <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 border border-gray-400 rounded shadow text-sm">Update</button>
      </form>
      </div>
    </div>
  );
};

export default DijkstraAnimatedView;
