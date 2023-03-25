const combinationSum2 = require('./solution');

const example1 = {
  candidates: [10, 1, 2, 7, 6, 1, 5],
  target: 8,
  output: [
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ],
};

const example2 = {
  candidates: [2, 5, 2, 1, 2],
  target: 5,
  output: [[1, 2, 2], [5]],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    const result = combinationSum2(example1.candidates, example1.target);
    result.forEach((arr) => arr.sort());

    expect(result.sort()).toStrictEqual(example1.output);
  });

  test('Passes example 2', () => {
    expect(
      combinationSum2(example2.candidates, example2.target)
        .map((arr) => arr.sort((a, b) => a - b))
        .sort((a, b) => a - b)
    ).toStrictEqual(
      example2.output
        .map((arr) => arr.sort((a, b) => a - b))
        .sort((a, b) => a - b)
    );
  });
});
