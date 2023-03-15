const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // add all stones to a max priority queue
  const heap = new MaxPriorityQueue();
  stones.forEach((stone) => heap.enqueue(stone));

  // remove the top two values, get the difference, and add that back in if it is non-zero
  // repeat until there is 1 or 0 stones left
  while (heap.size() > 1) {
    const first = heap.dequeue().element;
    const second = heap.dequeue().element;

    const diff = first - second;

    if (diff !== 0) heap.enqueue(diff);
  }

  if (heap.size() === 1) return heap.dequeue().element;
  return 0;
};

module.exports = lastStoneWeight;
