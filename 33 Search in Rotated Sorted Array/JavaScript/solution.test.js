const search = require('./solution');

const example1 = {
  nums: [4, 5, 6, 7, 0, 1, 2],
  target: 0,
  output: 4,
};

const example2 = {
  nums: [4, 5, 6, 7, 0, 1, 2],
  target: 3,
  output: -1,
};

const example3 = {
  nums: [1],
  target: 0,
  output: -1,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(search(example1.nums, example1.target)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(search(example2.nums, example2.target)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(search(example3.nums, example3.target)).toBe(example3.output);
  });
});
