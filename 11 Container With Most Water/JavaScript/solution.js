/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  // continue checking while the two pointers are not equal to each other
  while (left < right) {
    // calculate the area with the current pointers
    const area = (right - left) * Math.min(height[right], height[left]);
    max = Math.max(max, area);

    // move the pointer with the lower value inwards
    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
};

module.exports = maxArea;
