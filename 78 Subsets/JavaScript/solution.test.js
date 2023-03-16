const subsets = require('./solution');

const example1 = {
  nums: [1, 2, 3],
  output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
};

const example2 = {
  nums: [0],
  output: [[], [0]],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(subsets(example1.nums).sort()).toStrictEqual(example1.output.sort());
  });

  test('Passes example 2', () => {
    expect(subsets(example2.nums).sort()).toStrictEqual(example2.output.sort());
  });
});
