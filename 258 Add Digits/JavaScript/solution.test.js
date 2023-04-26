const addDigits = require('./solution');

const example1 = {
  num: 38,
  output: 2,
};

const example2 = {
  num: 0,
  output: 0,
};

const example3 = {
  num: 27,
  output: 9,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(addDigits(example1.num)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(addDigits(example2.num)).toBe(example2.output);
  });

  test('Returns correctly when num is multiple of 9', () => {
    expect(addDigits(example3.num)).toBe(example3.output);
  });
});
