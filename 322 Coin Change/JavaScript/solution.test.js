const coinChange = require('./solution');

const example1 = {
  coins: [1, 2, 5],
  amount: 11,
  output: 3,
};

const example2 = {
  coins: [2],
  amount: 3,
  output: -1,
};

const example3 = {
  coins: [1],
  amount: 0,
  output: 0,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(coinChange(example1.coins, example1.amount)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(coinChange(example2.coins, example2.amount)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(coinChange(example3.coins, example3.amount)).toBe(example3.output);
  });
});
