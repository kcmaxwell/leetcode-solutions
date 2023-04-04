const partitionString = require('./solution');

const example1 = {
  s: 'abacaba',
  output: 4,
};

const example2 = {
  s: 'ssssss',
  output: 6,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(partitionString(example1.s)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(partitionString(example2.s)).toBe(example2.output);
  });
});
