/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // use the solution from House Robber I twice
  // check the case where you take the first house and skip the last, or vice versa, and pick the max

  return Math.max(
    nums[0],
    helper(nums.slice(1, nums.length)),
    helper(nums.slice(0, nums.length - 1))
  );
};

const helper = (nums) => {
  let back2 = 0;
  let back1 = 0;
  for (const num of nums) {
    let temp = Math.max(back2 + num, back1);
    back2 = back1;
    back1 = temp;
  }

  return back1;
};

module.exports = rob;
