const isPalindrome = require('./solution');

const example1 = {
  x: 121,
  output: true,
};

const example2 = {
  x: -121,
  output: false,
};

const example3 = {
  x: 10,
  output: false,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(isPalindrome(example1.x)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(isPalindrome(example2.x)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(isPalindrome(example3.x)).toBe(example3.output);
  });
});
