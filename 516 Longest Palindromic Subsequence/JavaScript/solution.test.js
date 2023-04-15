const longestPalindromeSubseq = require('./solution');

const example1 = {
  s: 'bbbab',
  output: 4,
};

const example2 = {
  s: 'cbbd',
  output: 2,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(longestPalindromeSubseq(example1.s)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(longestPalindromeSubseq(example2.s)).toBe(example2.output);
  });
});
