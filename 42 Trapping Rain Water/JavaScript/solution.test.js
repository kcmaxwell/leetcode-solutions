const trap = require('./solution');

const example1 = {
  height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
  output: 6,
};

const example2 = {
  height: [4, 2, 0, 3, 2, 5],
  output: 9,
};

const example3 = {
  height: [4, 2, 3],
  output: 1,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(trap(example1.height)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(trap(example2.height)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(trap(example3.height)).toBe(example3.output);
  });
});
