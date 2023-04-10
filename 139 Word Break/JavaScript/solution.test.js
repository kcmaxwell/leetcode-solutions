const wordBreak = require('./solution');

const example1 = {
  s: 'leetcode',
  wordDict: ['leet', 'code'],
  output: true,
};

const example2 = {
  s: 'applepenapple',
  wordDict: ['apple', 'pen'],
  output: true,
};

const example3 = {
  s: 'catsandog',
  wordDict: ['cats', 'dog', 'sand', 'and', 'cat'],
  output: false,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(wordBreak(example1.s, example1.wordDict)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(wordBreak(example2.s, example2.wordDict)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(wordBreak(example3.s, example3.wordDict)).toBe(example3.output);
  });
});
