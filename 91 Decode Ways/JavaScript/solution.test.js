const numDecodings = require('./solution');

const example1 = {
  s: '12',
  output: 2,
};

const example2 = {
  s: '226',
  output: 3,
};

const example3 = {
  s: '06',
  output: 0,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(numDecodings(example1.s)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(numDecodings(example2.s)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(numDecodings(example3.s)).toBe(example3.output);
  });
});
