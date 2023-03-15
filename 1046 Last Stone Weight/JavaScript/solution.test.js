const lastStoneWeight = require('./solution');

const example1 = {
  stones: [2, 7, 4, 1, 8, 1],
  output: 1,
};

const example2 = {
  stones: [1],
  output: 1,
};

const noStonesLeft = {
  stones: [1, 1],
  output: 0,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(lastStoneWeight(example1.stones)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(lastStoneWeight(example2.stones)).toBe(example2.output);
  });

  test('No stones left returns 0', () => {
    expect(lastStoneWeight(noStonesLeft.stones)).toBe(noStonesLeft.output);
  });
});
