/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let result = Infinity;

  const dfs = (index, total) => {
    // exit early if this is not a min
    if (total >= result) return;

    // if we are past the final day, update result and return
    if (index >= days.length) {
      result = Math.min(result, total);
      return;
    }

    // choose a 1 day pass
    dfs(index + 1, total + costs[0]);

    // choose a 7 day pass
    let nextIndex = index + 1;
    while (nextIndex < days.length && days[nextIndex] < days[index] + 7) {
      nextIndex++;
    }
    dfs(nextIndex, total + costs[1]);

    // choose a 30 day pass
    while (nextIndex < days.length && days[nextIndex] < days[index] + 30) {
      nextIndex++;
    }
    dfs(nextIndex, total + costs[2]);
  };

  dfs(0, 0);

  return result;
};

module.exports = mincostTickets;
