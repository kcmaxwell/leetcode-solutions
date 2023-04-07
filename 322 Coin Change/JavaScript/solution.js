/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let result = Infinity;
  const memo = new Map();

  const dfs = (count, total) => {
    // if the current total matches the amount, update result if it is a new min
    if (total === amount) {
      result = Math.min(count, result);
      return;
    }

    // if the total passed the amount, or the coin count is past the current min, return
    if (total > amount || count >= result) return;

    // if the memo has this total with the same or smaller num of coins, return, else update memo
    if (memo.has(total) && memo.get(total) <= count) {
      return;
    } else {
      memo.set(total, count);
    }

    // try dfs on each coin type
    for (const coin of coins) {
      dfs(count + 1, total + coin);
    }
  };

  dfs(0, 0);

  if (result === Infinity) return -1;
  return result;
};

module.exports = coinChange;
