/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // iterate through the grid until you find a 1, then add up all tiles adjacent and check if it is a new max
  let max = 0;

  const search = (x, y) => {
    // if out of bounds, return 0
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return 0;

    // if not land, return 0
    if (grid[x][y] !== 1) return 0;

    // change the value of the grid space to show it has been visited
    grid[x][y] = '*';

    // otherwise, return 1 plus the values in all 4 directions around
    return (
      1 +
      search(x + 1, y) +
      search(x - 1, y) +
      search(x, y + 1) +
      search(x, y - 1)
    );
  };

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      // check the area of the island if we haven't yet seen it
      if (grid[x][y] === 1) {
        max = Math.max(max, search(x, y));
      }
    }
  }

  return max;
};

module.exports = maxAreaOfIsland;
