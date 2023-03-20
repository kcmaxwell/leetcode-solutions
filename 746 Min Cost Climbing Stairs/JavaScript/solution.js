/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // base cases: the top two stairs
  let minCost2Up = cost[cost.length - 1];
  let minCost1Up = Math.min(
    cost[cost.length - 2],
    cost[cost.length - 2] + minCost2Up
  );

  // go backwards through the cost array, updating the min costs
  for (let i = cost.length - 3; i > -1; i--) {
    const minCost = Math.min(minCost1Up + cost[i], minCost2Up + cost[i]);

    minCost2Up = minCost1Up;
    minCost1Up = minCost;
  }

  return Math.min(minCost1Up, minCost2Up);
};

module.exports = minCostClimbingStairs;
