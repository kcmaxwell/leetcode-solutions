/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
  // dp[u][c] = max count of vertices with color c for any path starting from vertex u
  const dp = Array(colors.length)
    .fill(0)
    .map(() => Array(26).fill(0));

  // create an adjacency list and count indegrees for each node
  const adjList = Array(colors.length)
    .fill(0)
    .map(() => []);
  const indegrees = Array(colors.length).fill(0);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    indegrees[v]++;
  }

  // initialize part of dp
  const q = [];
  for (let i = 0; i < colors.length; i++) {
    if (indegrees[i] === 0) q.push(i);
    dp[i][colors[i].charCodeAt() - 'a'.charCodeAt()] = 1;
  }

  let result = 0;
  let count = 0;
  while (q.length > 0) {
    const u = q.shift();
    count++;
    for (const v of adjList[u]) {
      for (let i = 0; i < 26; i++) {
        dp[v][i] = Math.max(
          dp[v][i],
          dp[u][i] + (colors[v].charCodeAt() - 'a'.charCodeAt() === i ? 1 : 0)
        );
      }
      indegrees[v]--;
      if (indegrees[v] === 0) {
        q.push(v);
      }
    }
  }

  if (count !== colors.length) {
    return -1;
  }

  for (let i = 0; i < colors.length; i++) {
    result = Math.max(result, Math.max(...dp[i]));
  }

  return result;
};

module.exports = largestPathValue;
