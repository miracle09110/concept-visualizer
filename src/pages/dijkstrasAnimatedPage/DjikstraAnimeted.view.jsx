import React, { useState, useEffect } from "react";

const DijkstraAnimatedView = () => {
  const [gridArray, setGridArray] = useState([]);
  const [startSquare, setStartSquare] = useState([10, 5]);
  const [endSquare, setEndSquare] = useState([15, 18]);
  const [visitedNodes, setVisitedNodes] = useState(new Set());
  const [shortestPath, setShortestPath] = useState([]);
  const [isAnimatingPath, setIsAnimatingPath] = useState(false);
  const [dimension, setDimension] = useState(30);
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

  const handleVisualizeClick = () => {
    setVisitedNodes(new Set());
    setShortestPath([]);
    setIsAnimatingPath(false);
    dijkstra();
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

  return (
    <div className="mx-auto w-1/2">
      {renderGrid()}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleVisualizeClick}
        disabled={isAnimatingPath}
      >
        {isAnimatingPath
          ? "Animating Path..."
          : "Visualize Dijkstra's Algorithm"}
      </button>

      <form onSubmit={handleChangeDimension}>
        <input type="number" name="dimension" />
        <button type="submit">change dimensions</button>
      </form>

      <form action=""></form>
    </div>
  );
};

export default DijkstraAnimatedView;
