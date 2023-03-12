const minWindow = require('./solution');

const example1 = {
  s: 'ADOBECODEBANC',
  t: 'ABC',
  output: 'BANC',
};

const example2 = {
  s: 'a',
  t: 'a',
  output: 'a',
};

const example3 = {
  s: 'a',
  t: 'aa',
  output: '',
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(minWindow(example1.s, example1.t)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(minWindow(example2.s, example2.t)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(minWindow(example3.s, example3.t)).toBe(example3.output);
  });
});
