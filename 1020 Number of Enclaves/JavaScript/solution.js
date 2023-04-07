/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let result = 0;

  const replace = (x, y) => {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return;

    if (grid[x][y] === 1) {
      grid[x][y] = 0;

      replace(x + 1, y);
      replace(x - 1, y);
      replace(x, y + 1);
      replace(x, y - 1);
    }
  };

  for (let x = 0; x < grid.length; x++) {
    if (grid[x][0] === 1) replace(x, 0);
    if (grid[x][grid[0].length - 1]) replace(x, grid[0].length - 1);
  }
  for (let y = 0; y < grid[0].length; y++) {
    if (grid[0][y] === 1) replace(0, y);
    if (grid[grid.length - 1][y] === 1) replace(grid.length - 1, y);
  }

  for (let x = 1; x < grid.length - 1; x++) {
    for (let y = 1; y < grid[0].length - 1; y++) {
      if (grid[x][y] === 1) result++;
    }
  }

  return result;
};

module.exports = numEnclaves;
