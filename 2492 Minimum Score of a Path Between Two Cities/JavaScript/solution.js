/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  // create graph structure using a map
  const map = new Map();
  for (const [a, b, d] of roads) {
    if (!map.has(a)) map.set(a, []);
    if (!map.has(b)) map.set(b, []);
    map.get(a).push([b, d]);
    map.get(b).push([a, d]);
  }

  // check all roads connected to 1, return the minimum distance found
  // all roads connected to 1 are also connected to n (a path from 1 to n is guaranteed)
  let result = Infinity;
  const queue = [1];
  const visited = new Set([]);
  visited.add(1);

  while (queue.length > 0) {
    const node = queue.shift();
    for (const [next, distance] of map.get(node)) {
      result = Math.min(result, distance);
      if (visited.has(next)) continue;

      visited.add(next);
      queue.push(next);
    }
  }

  return result;
};

module.exports = minScore;
