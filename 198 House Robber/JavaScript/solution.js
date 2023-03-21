/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let back2 = 0;
  let back1 = 0;
  for (const num of nums) {
    let temp = Math.max(num + back2, back1);
    back2 = back1;
    back1 = temp;
  }

  return back1;
};

module.exports = rob;
