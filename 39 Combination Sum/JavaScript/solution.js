/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // use depth first search to find all unique combinations
  const result = [];

  const dfs = (i, subset) => {
    if (i >= candidates.length) return;

    const total =
      subset.length > 0 ? subset.reduce((acc, curr) => (acc += curr), 0) : 0;

    console.log(total);

    if (total === target) {
      result.push([...subset]);
      return;
    }

    if (candidates[i] + total <= target) {
      subset.push(candidates[i]);
      dfs(i, subset);
      subset.pop();
      dfs(i + 1, subset);
    } else {
      dfs(i + 1, subset);
    }
  };

  dfs(0, []);

  return result;
};

module.exports = combinationSum;
