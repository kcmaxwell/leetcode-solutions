/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = Array(numRows);

  for (let i = 0; i < numRows; i++) {
    const row = Array(i + 1);

    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) row[j] = 1;
      else row[j] = result[i - 1][j] + result[i - 1][j - 1];
    }

    result[i] = row;
  }

  return result;
};

module.exports = generate;
