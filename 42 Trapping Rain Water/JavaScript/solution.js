/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];

  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      result += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      result += maxRight - height[right];
    }
  }

  return result;
};

module.exports = trap;
