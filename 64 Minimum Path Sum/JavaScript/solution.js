/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let row = grid.length;
  let col = grid[0].length;

  // result stores the min values for the current row
  let result = [0];

  // loop along each row, going down 1 column at a time
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0)
        result.push(result[j] + grid[i][j]); // at the start of each row
      else if (j === 0) result[j + 1] += grid[i][j];
      // along the first row only, just add the current value, no value above to worry about
      else result[j + 1] = Math.min(result[j], result[j + 1]) + grid[i][j];
    }
  }

  return result[col];
};

module.exports = minPathSum;
