const generate = require('./solution');

const example1 = {
  numRows: 5,
  output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
};

const example2 = {
  numRows: 1,
  output: [[1]],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(generate(example1.numRows)).toStrictEqual(example1.output);
  });

  test('Passes example 2', () => {
    expect(generate(example2.numRows)).toStrictEqual(example2.output);
  });
});
