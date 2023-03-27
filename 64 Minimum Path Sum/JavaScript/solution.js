/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let result = Infinity;

  const dfs = (x, y, total) => {
    // if the current total is larger than the minimum so far, return
    if (total >= result) return;

    // if this is the bottom left, update result if necessary and return
    if (x === grid.length - 1 && y === grid[0].length - 1) {
      result = Math.min(result, total + grid[x][y]);
      return;
    }

    if (x < grid.length - 1) dfs(x + 1, y, total + grid[x][y]);
    if (y < grid[0].length - 1) dfs(x, y + 1, total + grid[x][y]);
  };

  dfs(0, 0, 0);

  return result;
};

module.exports = minPathSum;
