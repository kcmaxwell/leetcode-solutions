const subsetsWithDup = require('./solution');

const example1 = {
  nums: [1, 2, 2],
  output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]],
};

const example2 = {
  nums: [0],
  output: [[], [0]],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(subsetsWithDup(example1.nums).sort()).toStrictEqual(
      example1.output.sort()
    );
  });

  test('Passes example 2', () => {
    expect(subsetsWithDup(example2.nums).sort()).toStrictEqual(
      example2.output.sort()
    );
  });
});
