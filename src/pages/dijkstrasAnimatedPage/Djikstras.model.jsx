class DijkstraModel {
  constructor(dimension) {
    this.dimension = dimension;
    this.gridArray = this.createGridArray();
    this.startSquare = [10, 5];
    this.endSquare = [15, 18];
    this.visitedNodes = new Set();
    this.shortestPath = [];
    this.isAnimatingPath = false;
  }

  createGridArray(row, col) {
    const grid = [];
    for (let row = 0; row < numberOfRows; row++) {
      for (let column = 0; column < numberOfColumns; column++) {
        grid.push({ coordinates: [row, column], type: "cell" });
      }
    }
    return grid;
  }

  dijkstra() {
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
  }

  reset() {
  }

  clear() {
  }

  updateGridArray(row, col) {
  }

  setStartSquare(row, col) {
  }

  setEndSquare(row, col) {
  }

  setDimension(newDimension) {
  }
}

export default DijkstraModel;
