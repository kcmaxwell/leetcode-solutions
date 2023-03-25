/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const dfs = (remaining, index, subset) => {
    if (remaining === 0) return result.push(subset.slice());
    if (remaining < 0) return;

    let prev = -1;
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] === prev) continue;

      subset.push(candidates[i]);
      dfs(remaining - candidates[i], i + 1, subset);
      subset.pop();
      prev = candidates[i];
    }
  };

  dfs(target, 0, []);

  return result;
};

module.exports = combinationSum2;
