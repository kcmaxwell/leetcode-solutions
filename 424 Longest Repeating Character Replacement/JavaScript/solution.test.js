const characterReplacement = require('./solution');

const example1 = {
  s: 'ABAB',
  k: 2,
  output: 4,
};

const example2 = {
  s: 'AABABBA',
  k: 1,
  output: 4,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(characterReplacement(example1.s, example1.k)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(characterReplacement(example2.s, example2.k)).toBe(example2.output);
  });
});
