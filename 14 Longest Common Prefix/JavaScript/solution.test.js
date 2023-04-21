const longestCommonPrefix = require('./solution');

const example1 = {
  strs: ['flower', 'flow', 'flight'],
  output: 'fl',
};

const example2 = {
  strs: ['dog', 'racecar', 'car'],
  output: '',
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(longestCommonPrefix(example1.strs)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(longestCommonPrefix(example2.strs)).toBe(example2.output);
  });
});
