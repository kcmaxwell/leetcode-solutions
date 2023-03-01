/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
  // our strategy is to iterate through nums and add numbers that would make a pair to a set
  // if a number in nums is already in the set, we already passed its pair, and we can return them

  // use a set to hold numbers we are looking for
  const set = new Set();

  for (const [index, num] of nums.entries()) {
    // found a pair, return the index array
    if (set.has(num)) {
      const otherIndex = nums.indexOf(target - num);
      if (otherIndex > index) return [index, otherIndex];
      return [otherIndex, index];
    }

    // no pair found, add a number we are looking for to the set
    set.add(target - num);
  }

  // no pair found, should not happen, as the input should have a solution
  return [];
};

module.exports = twoSum;
