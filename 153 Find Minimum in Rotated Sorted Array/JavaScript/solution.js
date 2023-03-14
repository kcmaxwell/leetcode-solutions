/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // use binary search, taking the right side if the pivot is greater or equal to the left pointer
  let left = 0;
  let right = nums.length - 1;
  let min = nums[0];
  while (left <= right) {
    // if the portion of the array is already sorted, do one last min check on the left, then return
    if (nums[left] < nums[right]) {
      min = Math.min(min, nums[left]);
      return min;
    }

    const mid = Math.floor((left + right) / 2);
    const midNum = nums[mid];

    min = Math.min(min, midNum);

    if (midNum >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return min;
};

module.exports = findMin;
