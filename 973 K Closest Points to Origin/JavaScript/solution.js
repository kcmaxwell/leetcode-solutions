const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // add each point's index and distance from 0,0 to a MinPriorityQueue
  const heap = new MinPriorityQueue();
  for (const [index, point] of points.entries()) {
    heap.enqueue(index, distance(point, [0, 0]));
  }

  // dequeue to return the k closest point indices
  const result = [];
  for (let i = k; i > 0; i--) {
    result.push(points[heap.dequeue().element]);
  }

  return result;
};

const distance = (p1, p2) => {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
};

module.exports = kClosest;
