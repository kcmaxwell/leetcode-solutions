/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // create map with counts of each number, then run DFS on that map
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }

  let result = [];
  const counts = [...map].map(([key, val]) => ({ key, val }));
  const subset = [];

  const dfs = (i) => {
    if (i >= counts.length) {
      result.push([...subset]);
      return;
    }

    console.log(counts[i]);

    // choose between 1 and the max count of num
    for (let x = counts[i].val; x > 0; x--) {
      subset.push(counts[i].key);
      dfs(i + 1);
    }

    // remove all instances of num from the subset
    for (let x = counts[i].val; x > 0; x--) subset.pop();

    // choose 0 of the current num
    dfs(i + 1);
  };

  dfs(0);

  return result;
};

module.exports = subsetsWithDup;
