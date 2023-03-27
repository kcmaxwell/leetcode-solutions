/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let row = grid.length;
  let col = grid[0].length;

  // result stores the min values for the current row
  // result's final size will be col, the zero it starts with can be thought of as position (-1, 0)
  let result = [0];

  // go down 1 column at a time, across each row, storing min values in result
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // on the first row only, we will fill result with values
      // at (0, 0), we look at (-1, 0), which is 0, and add grid[0][0]
      if (i === 0) result.push(result[j] + grid[i][j]);
      // at the start of the each row, add the min value above to the current point's value
      else if (j === 0) result[j + 1] += grid[i][j];
      // pick the minimum between the value above (j + 1) and the value to the left (j)
      else result[j + 1] = Math.min(result[j], result[j + 1]) + grid[i][j];
    }
  }

  // return the value at (row, col)
  // remember, result is length col now, result[0] is at (-1, row)
  return result[col];
};

module.exports = minPathSum;
