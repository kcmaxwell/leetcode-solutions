/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // use the solution from House Robber I twice
  // check the case where you take the first house and skip the last, or vice versa, and pick the max

  // because we skip the first and last in each case, we need a base case for length 1
  if (nums.length === 1) return nums[0];

  let back2 = 0;
  let back1 = 0;
  for (const [index, num] of nums.entries()) {
    if (index === nums.length - 1) continue;

    let temp = Math.max(num + back2, back1);
    back2 = back1;
    back1 = temp;
  }

  let firstSolution = back1;
  back2 = 0;
  back1 = 0;
  for (const [index, num] of nums.entries()) {
    if (index === 0) continue;

    let temp = Math.max(num + back2, back1);
    back2 = back1;
    back1 = temp;
  }

  return Math.max(firstSolution, back1);
};

module.exports = rob;
