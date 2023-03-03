/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // strategy: count occurrences of each number in nums and store in a map
  // then bucket sort by placing each number at the index of their occurrences
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }

  const buckets = Array.from(new Array(nums.length + 1), () => []);
  for (const [num, count] of map) {
    buckets[count].push(num);
  }

  const topK = [];
  let kLeft = k;
  let bucketIndex = buckets.length - 1;
  while (kLeft > 0) {
    if (buckets[bucketIndex].length) {
      buckets[bucketIndex].forEach((num) => {
        topK.push(num);
        kLeft--;
      });
    }
    bucketIndex--;
  }

  return topK;
};

module.exports = topKFrequent;
