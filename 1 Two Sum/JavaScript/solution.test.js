const twoSum = require('./solution');

const example1Data = {
  nums: [2, 7, 11, 15],
  target: 9,
};
const example1Solution = [0, 1];

const example2Data = {
  nums: [3, 2, 4],
  target: 6,
};
const example2Solution = [1, 2];

// handles minimum size case
const example3Data = {
  nums: [3, 3],
  target: 6,
};
const example3Solution = [0, 1];

describe('Test solution', () => {
  test('Passes example data', () => {
    expect(twoSum(example1Data.nums, example1Data.target)).toStrictEqual(
      example1Solution
    );
    expect(twoSum(example2Data.nums, example2Data.target)).toStrictEqual(
      example2Solution
    );
    expect(twoSum(example3Data.nums, example3Data.target)).toStrictEqual(
      example3Solution
    );
  });

  test('Handles a negative number in the solution', () => {
    const result = twoSum([3, 8, -2, 4], 6);

    expect(result).toStrictEqual([1, 2]);
  });

  test('Handles having two of the same number in different indices', () => {
    const result = twoSum([7, 4, 7], 14);

    expect(result).toStrictEqual([0, 2]);
  });
});
