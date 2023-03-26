const longestPalindrome = require('./solution');

const example1 = {
  s: 'babad',
  output: 'bab',
};

const example2 = {
  s: 'cbbd',
  output: 'bb',
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(longestPalindrome(example1.s)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(longestPalindrome(example2.s)).toBe(example2.output);
  });
});
