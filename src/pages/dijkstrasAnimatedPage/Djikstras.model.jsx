const createGridArray = (numberOfRows, numberOfColumns) => {
  const grid = [];
  for (let row = 0; row < numberOfRows; row++) {
    for (let column = 0; column < numberOfColumns; column++) {
      grid.push({ coordinates: [row, column], type: "cell" });
    }
  }
  return grid;
};

const dijkstra = (gridArray, startSquare, endSquare, dimension) => {
  const graph = {}; // Construct graph with neighbors (adjacency list)
  for (const item of gridArray) {
    const [row, col] = item.coordinates;
    const neighbors = [];
    if (row > 0) neighbors.push(`${row - 1}-${col}`); // Top neighbor
    if (row < dimension - 1) neighbors.push(`${row + 1}-${col}`); // Bottom neighbor
    if (col > 0) neighbors.push(`${row}-${col - 1}`); // Left neighbor
    if (col < dimension - 1) neighbors.push(`${row}-${col + 1}`); // Right neighbor
    graph[`${row}-${col}`] = neighbors;
  }

  console.log(gridArray);

  const distances = {}; // Distances from startSquare to each node
  const previous = {}; // Previous node in the shortest path
  for (const item of gridArray) {
    const [row, col] = item.coordinates;
    const key = `${row}-${col}`;
    distances[key] =
      key === `${startSquare[0]}-${startSquare[1]}` ? 0 : Infinity;
    previous[key] = null;
  }

  const unvisited = new Set(Object.keys(distances));
  console.log(unvisited);

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

      for (const neighbor of graph[currentNode]) {
        const [row, col] = neighbor.split("-");
        const neighborKey = `${row}-${col}`;
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
