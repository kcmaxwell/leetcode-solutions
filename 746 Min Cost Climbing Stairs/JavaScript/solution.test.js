const minCostClimbingStairs = require('./solution');

const example1 = {
  cost: [10, 15, 20],
  output: 15,
};

const example2 = {
  cost: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
  output: 6,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(minCostClimbingStairs(example1.cost)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(minCostClimbingStairs(example2.cost)).toBe(example2.output);
  });
});
