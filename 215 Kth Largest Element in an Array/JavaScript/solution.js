const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // place all nums inside a max priority queue
  const heap = new MaxPriorityQueue();
  for (const num of nums) {
    heap.enqueue(num, num);
  }

  // pop k - 1 times to get the kth largest on the top
  for (let i = 0; i < k - 1; i++) heap.dequeue();

  // return the kth largest
  return heap.dequeue().element;
};

module.exports = findKthLargest;
