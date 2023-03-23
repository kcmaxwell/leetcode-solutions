/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let result = [];
  const subset = [];
  const set = new Set();

  const dfs = (i) => {
    if (i >= nums.length) {
      return set.add(JSON.stringify(subset.slice().sort((a, b) => a - b)));
    }

    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  };

  dfs(0);

  set.forEach((s) => result.push(JSON.parse(s)));

  return result;
};

module.exports = subsetsWithDup;
