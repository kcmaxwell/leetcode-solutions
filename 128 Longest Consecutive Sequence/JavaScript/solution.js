/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set();

  // convert nums array into a set
  for (const num of nums) {
    set.add(num);
  }

  // get all numbers that are the start of a sequence
  let maxSequenceLength = 0;
  for (const num of set.values()) {
    if (!set.has(num - 1)) {
      let sequenceLength = 1;

      let next = num + 1;
      while (set.has(next)) {
        sequenceLength++;
        next++;
      }

      maxSequenceLength = Math.max(maxSequenceLength, sequenceLength);
    }
  }

  return maxSequenceLength;
};

module.exports = longestConsecutive;
