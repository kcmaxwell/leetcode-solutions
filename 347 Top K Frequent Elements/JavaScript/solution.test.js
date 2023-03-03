const topKFrequent = require('./solution');

const example1 = {
  nums: [1, 1, 1, 2, 2, 3],
  k: 2,
  output: [1, 2],
};

const example2 = {
  nums: [1],
  k: 1,
  output: [1],
};

const kEqualToNumsLength = {
  nums: [1, 1, 1, 2, 2, 3],
  k: 3,
  output: [1, 2, 3],
};

describe('Test solution', () => {
  test('Passes examples', () => {
    const result1 = topKFrequent(example1.nums, example1.k);
    const result2 = topKFrequent(example2.nums, example2.k);

    expect(result1.sort()).toStrictEqual(example1.output.sort());
    expect(result2.sort()).toStrictEqual(example2.output.sort());
  });

  test('works when k equal to nums length', () => {
    const result = topKFrequent(kEqualToNumsLength.nums, kEqualToNumsLength.k);

    expect(result.sort()).toStrictEqual(kEqualToNumsLength.output.sort());
  });

  test('Failed result in leetcode', () => {
    const result = topKFrequent([1, 2], 2);
    expect(result.sort()).toStrictEqual([1, 2].sort());
  });
});
