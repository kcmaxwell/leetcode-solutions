/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
  let result = -1;
  const visited = new Set();

  const dfs = (i, dist) => {
    visited.add(i);

    if (edges[i] != -1 && !visited.has(edges[i])) {
      dist.set(edges[i], dist.get(i) + 1);
      dfs(edges[i], dist);
    } else if (edges[i] != -1 && dist.has(edges[i])) {
      result = Math.max(result, dist.get(i) - dist.get(edges[i]) + 1);
    }
  };

  for (let i = 0; i < edges.length; i++) {
    if (visited.has(i)) continue;

    const dist = new Map();
    dist.set(i, 1);
    dfs(i, dist);
  }

  return result;
};

module.exports = longestCycle;
