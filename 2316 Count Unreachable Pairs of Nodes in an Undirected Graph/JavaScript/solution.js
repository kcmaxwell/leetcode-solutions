/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  // turn the edges array into a graph structure array
  const graph = [...Array(n)].map((v) => []);
  for (const [e1, e2] of edges) {
    graph[e1].push(e2);
    graph[e2].push(e1);
  }

  const visited = new Set([]);
  const counts = [];
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue;
    visited.add(i);
    const count = dfs(i, graph, visited);
    counts.push(count);
  }

  let result = 0;
  let sum = counts[0];
  for (let i = 1; i < counts.length; i++) {
    result += sum * counts[i];
    sum += counts[i];
  }

  return result;
};

const dfs = (node, graph, visited) => {
  let count = 1;
  for (const child of graph[node]) {
    if (visited.has(child)) continue;
    visited.add(child);
    count += dfs(child, graph, visited);
  }

  return count;
};

module.exports = countPairs;
