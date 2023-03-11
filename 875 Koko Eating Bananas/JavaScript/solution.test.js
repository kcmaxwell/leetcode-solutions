const minEatingSpeed = require('./solution');

const example1 = {
  piles: [3, 6, 7, 11],
  h: 8,
  output: 4,
};

const example2 = {
  piles: [30, 11, 23, 4, 20],
  h: 5,
  output: 30,
};

const example3 = {
  piles: [30, 11, 23, 4, 20],
  h: 6,
  output: 23,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(minEatingSpeed(example1.piles, example1.h)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(minEatingSpeed(example2.piles, example2.h)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(minEatingSpeed(example3.piles, example3.h)).toBe(example3.output);
  });

  test('Single pile with 1 hour gives the size of the pile', () => {
    expect(minEatingSpeed([5], 1)).toBe(5);
  });

  test('Single pile with multiple hours gives the size of the pile divided by the hours rounded up', () => {
    expect(minEatingSpeed([31], 5)).toBe(7);
  });

  test('Two piles with multiple hours', () => {
    expect(minEatingSpeed([25, 1], 6)).toBe(5);
  });
});
