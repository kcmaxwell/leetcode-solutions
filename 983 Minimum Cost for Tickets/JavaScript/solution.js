/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const min = Array(days.length + 1).fill(Infinity);
  min[0] = 0;

  for (let i = 1; i <= days.length; i++) {
    min[i] = min[i - 1] + costs[0]; // choose 1 day pass for current day

    let j = i - 1;
    while (j >= 0 && days[i - 1] - days[j] < 7) j--;
    min[i] = Math.min(min[i], min[j + 1] + costs[1]); // 7 day pass for current day

    j = i - 1;
    while (j >= 0 && days[i - 1] - days[j] < 30) j--;
    min[i] = Math.min(min[i], min[j + 1] + costs[2]);
  }

  return min[days.length];
};

module.exports = mincostTickets;
