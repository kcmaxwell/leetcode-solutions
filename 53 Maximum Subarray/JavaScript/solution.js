/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const findMax = (l, r) => {
    // base case, return single value
    if (l === r) return nums[l];

    let mid = Math.floor((l + r) / 2);
    let leftSum = findMax(l, mid);
    let rightSum = findMax(mid + 1, r);
    let crossingSum = findCrossingSum(l, mid, r);

    return Math.max(leftSum, rightSum, crossingSum);
  };

  const findCrossingSum = (l, mid, r) => {
    // a crossing sum crosses the left and right side
    // mid is on the left side, mid + 1 is on the right, and the crossing sum must contain both
    // start search for largest sum across both with these two values
    let sum = 0;
    let maxLeft = -Infinity;
    for (let i = mid; i >= l; i--) {
      sum += nums[i];
      maxLeft = Math.max(maxLeft, sum);
    }

    sum = 0;
    let maxRight = -Infinity;
    for (let i = mid + 1; i <= r; i++) {
      sum += nums[i];
      maxRight = Math.max(maxRight, sum);
    }

    return maxLeft + maxRight;
  };

  return findMax(0, nums.length - 1);
};

module.exports = maxSubArray;
