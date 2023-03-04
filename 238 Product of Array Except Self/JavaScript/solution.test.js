const productExceptSelf = require('./solution');

const example1 = {
  nums: [1, 2, 3, 4],
  output: [24, 12, 8, 6],
};

const example2 = {
  nums: [-1, 1, 0, -3, 3],
  output: [0, 0, 9, 0, 0],
};

describe('Test solution', () => {
  test('Passes examples', () => {
    expect(productExceptSelf(example1.nums)).toStrictEqual(example1.output);
    expect(productExceptSelf(example2.nums)).toStrictEqual(example2.output);
  });

  test('Works with minimum size nums array', () => {
    expect(productExceptSelf([5, 3])).toStrictEqual([3, 5]);
  });

  test('Works with an element being 0', () => {
    expect(productExceptSelf([0, 5, 6])).toStrictEqual([30, 0, 0]);
  });
});
