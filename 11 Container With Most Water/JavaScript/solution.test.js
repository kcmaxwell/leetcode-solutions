const maxArea = require('./solution');

const example1 = {
  height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
  output: 49,
};

const example2 = {
  height: [1, 1],
  output: 1,
};

const example3 = {
  height: [1, 2, 4, 3],
  output: 4,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(maxArea(example1.height)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(maxArea(example2.height)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(maxArea(example3.height)).toBe(example3.output);
  });
});
