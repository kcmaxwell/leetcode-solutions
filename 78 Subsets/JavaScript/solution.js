/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // use a depth-first search to add all possible subsets to a result array
  const result = [];

  const dfs = (i, subset) => {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1, subset);

    subset.pop();
    dfs(i + 1, subset);
  };

  dfs(0, []);

  return result;
};

module.exports = subsets;
