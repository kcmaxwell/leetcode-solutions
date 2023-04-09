const largestPathValue = require('./solution');

const example1 = {
  colors: 'abaca',
  edges: [
    [0, 1],
    [0, 2],
    [2, 3],
    [3, 4],
  ],
  output: 3,
};

const example2 = {
  colors: 'a',
  edges: [[0, 0]],
  output: -1,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(largestPathValue(example1.colors, example1.edges)).toBe(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(largestPathValue(example2.colors, example2.edges)).toBe(
      example2.output
    );
  });
});
