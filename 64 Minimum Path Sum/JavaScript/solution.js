/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const map = new Map();

  const minAtPoint = (x, y) => {
    // if point is the end, return the value at the end
    if (x === grid.length - 1 && y === grid[0].length - 1) {
      return grid[x][y];
    }

    // if out of bounds, return infinity
    if (x >= grid.length || y >= grid[0].length) return Infinity;

    // if this point has been reached already, return from the map
    if (map.has(`${x},${y}`)) return map.get(`${x},${y}`);

    // return the minimum of the two choices, the point to the right and the point down
    const minHere =
      Math.min(minAtPoint(x + 1, y), minAtPoint(x, y + 1)) + grid[x][y];
    map.set(`${x},${y}`, minHere);

    return minHere;
  };

  return minAtPoint(0, 0);
};

module.exports = minPathSum;
