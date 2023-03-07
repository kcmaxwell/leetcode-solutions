/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // strategy: add all numbers to a map counting occurrences
  // check every pair in nums and see if there is an unused number in the map making a triplet

  // store triplets in a set to avoid duplicates
  const tripletsSet = new Set();

  // count occurrences of each number
  const numsCount = new Map();
  for (const num of nums) {
    if (numsCount.has(num)) numsCount.set(num, numsCount.get(num) + 1);
    else numsCount.set(num, 1);
  }

  let first = 0;
  let second = 1;
  while (first < nums.length - 1) {
    if (second === nums.length) {
      first++;
      second = first + 1;
    } else {
      const target = -(nums[first] + nums[second]);
      let targetCount = numsCount.get(target);
      if (targetCount) {
        if (target === nums[first]) targetCount--;
        if (target === nums[second]) targetCount--;

        if (targetCount > 0) {
          const triplet = [nums[first], nums[second], target].sort();
          tripletsSet.add(JSON.stringify(triplet));
        }
      }

      second++;
    }
  }

  return Array.from(tripletsSet).map(JSON.parse);
};

module.exports = threeSum;
