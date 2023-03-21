/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  // search for a zero, count how many zeros in a row there are, then add the count of subarrays to the result
  let result = 0;

  let start = false;
  let left = 0;
  for (const [index, num] of nums.entries()) {
    if (!start) {
      if (num === 0) {
        start = true;
        left = index;
      }
    } else {
      if (num !== 0) {
        result += countSubarrays(index - left);
        start = false;
      }
    }
  }

  if (start === true) result += countSubarrays(nums.length - left);

  return result;
};

const countSubarrays = (length) => {
  let result = 0;
  while (length > 0) {
    result += length;
    length--;
  }
  return result;
};

module.exports = zeroFilledSubarray;
