const combinationSum = require('./solution');

const example1 = {
  candidates: [2, 3, 6, 7],
  target: 7,
  output: [[2, 2, 3], [7]],
};

const example2 = {
  candidates: [2, 3, 5],
  target: 8,
  output: [
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ],
};

const example3 = {
  candidates: [2],
  target: 1,
  output: [],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(combinationSum(example1.candidates, example1.target)).toStrictEqual(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(combinationSum(example2.candidates, example2.target)).toStrictEqual(
      example2.output
    );
  });

  test('Passes example 3', () => {
    expect(combinationSum(example3.candidates, example3.target)).toStrictEqual(
      example3.output
    );
  });
});
