/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // use a binary search on the matrix
  const height = matrix.length;
  const width = matrix[0].length;

  let start = [0, 0];
  let end = [height - 1, width - 1];
};

module.exports = searchMatrix;
