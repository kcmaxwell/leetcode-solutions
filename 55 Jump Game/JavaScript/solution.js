/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // stores the current maximum jump
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    // if i is less than curr, there is no way to jump to current index
    if (i > curr) return false;

    // update the current maximum jump
    curr = Math.max(curr, i + nums[i]);
  }

  return true;
};

module.exports = canJump;
