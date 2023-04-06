/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  // search for any land (0s) along the edges and search and replace all with 1s
  // then count all remaining islands
  let result = 0;

  const replace = (x, y) => {
    // return if out of bounds
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
      return;
    }

    // if the given space is land, change to water and check adjacent places
    if (grid[x][y] === 0) {
      grid[x][y] = 1;
      replace(x + 1, y);
      replace(x - 1, y);
      replace(x, y + 1);
      replace(x, y - 1);
    }
  };

  // remove land on edges
  for (let x = 0; x < grid.length; x++) {
    if (grid[x][0] === 0) {
      replace(x, 0);
    }

    if (grid[x][grid[0].length - 1] === 0) {
      replace(x, grid[0].length - 1);
    }
  }

  for (let y = 0; y < grid[0].length; y++) {
    if (grid[0][y] === 0) replace(0, y);
    if (grid[grid.length - 1][y] === 0) replace(grid.length - 1, y);
  }

  // search for islands, if one is found, replace with water
  for (let x = 1; x < grid.length - 1; x++) {
    for (let y = 1; y < grid[0].length - 1; y++) {
      if (grid[x][y] === 0) {
        result++;
        replace(x, y);
      }
    }
  }

  return result;
};

module.exports = closedIsland;
