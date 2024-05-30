import React, { useState, useEffect } from "react";
import DijkstraView from "./Djikstra.view";

const DijkstraController = () => {
  const [gridArray, setGridArray] = useState([]);
  const [startSquare, setStartSquare] = useState([10, 5]);
  const [endSquare, setEndSquare] = useState([15, 18]);
  const [visitedNodes, setVisitedNodes] = useState(new Set());
  const [shortestPath, setShortestPath] = useState([]);
  const [isAnimatingPath, setIsAnimatingPath] = useState(false);
  const [dimension, setDimension] = useState(20);
  const [isMouseDown, setIsMouseDown] = useState(false);

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

  const createGridArray = (numberOfRows, numberOfColumns) => {
    const grid = [];
    for (let row = 0; row < numberOfRows; row++) {
      for (let column = 0; column < numberOfColumns; column++) {
        grid.push({ coordinates: [row, column], type: "cell" });
      }
    }
    return grid;
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
    <DijkstraView
      gridArray={gridArray}
      startSquare={startSquare}
      endSquare={endSquare}
      visitedNodes={visitedNodes}
      shortestPath={shortestPath}
      isAnimatingPath={isAnimatingPath}
      dimension={dimension}
      isMouseDown={isMouseDown}
      handleResetClick={handleResetClick}
      handleClearClick={handleClearClick}
      handleVisualizeClick={handleVisualizeClick}
      handleChangeDimension={handleChangeDimension}
      handleStartSquareCoordinateChange={handleStartSquareCoordinateChange}
      handleEndSquareCoordinateChange={handleEndSquareCoordinateChange}
      handleCellHover={handleCellHover}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      handleCellClick={handleCellClick}
    />
  );
};

export default DijkstraController;
