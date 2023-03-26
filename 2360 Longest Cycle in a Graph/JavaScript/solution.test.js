const longestCycle = require('./solution');

const example1 = {
  edges: [3, 3, 4, 2, 3],
  output: 3,
};

const example2 = {
  edges: [2, -1, 3, 1],
  output: -1,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(longestCycle(example1.edges)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(longestCycle(example2.edges)).toBe(example2.output);
  });
});
