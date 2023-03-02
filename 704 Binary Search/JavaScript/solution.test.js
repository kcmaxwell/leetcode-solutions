const search = require('./solution');

const example1 = {
  nums: [-1, 0, 3, 5, 9, 12],
  target: 9,
  output: 4,
};

const example2 = {
  nums: [-1, 0, 3, 5, 9, 12],
  target: 2,
  output: -1,
};

describe('Test solution', () => {
  test('Passes examples', () => {
    const example1Result = search(example1.nums, example1.target);
    const example2Result = search(example2.nums, example2.target);

    expect(example1Result).toBe(example1.output);
    expect(example2Result).toBe(example2.output);
  });

  test('Returns 0 for target index in array of length 1', () => {
    expect(search([5], 5)).toBe(0);
  });

  test('Returns -1 for target not found in array of length 1', () => {
    expect(search([5], 2)).toBe(-1);
  });

  test('Handles an array of length 2 with target found', () => {
    const result = search([0, 3], 3);

    expect(result).toBe(1);
  });

  test('Handles an array of length 2 with missing target', () => {
    const result = search([0, 3], -5);

    expect(result).toBe(-1);
  });
});
