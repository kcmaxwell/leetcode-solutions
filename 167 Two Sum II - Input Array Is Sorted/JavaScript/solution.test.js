const twoSum = require('./solution');

const example1 = {
  numbers: [2, 7, 11, 15],
  target: 9,
  output: [1, 2],
};

const example2 = {
  numbers: [2, 3, 4],
  target: 6,
  output: [1, 3],
};

const example3 = {
  numbers: [-1, 0],
  target: -1,
  output: [1, 2],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(twoSum(example1.numbers, example1.target)).toStrictEqual(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(twoSum(example2.numbers, example2.target)).toStrictEqual(
      example2.output
    );
  });

  test('Passes example 3', () => {
    expect(twoSum(example3.numbers, example3.target)).toStrictEqual(
      example3.output
    );
  });
});
