export const createGridArray = (numberOfRows, numberOfColumns) => {
  const grid = [];
  for (let row = 0; row < numberOfRows; row++) {
    for (let column = 0; column < numberOfColumns; column++) {
      grid.push({ coordinates: [row, column], type: "cell" });
    }
  }
  return grid;
};
