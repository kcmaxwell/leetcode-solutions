const mergeAlternately = require('./solution');

const example1 = {
  word1: 'abc',
  word2: 'pqr',
  output: 'apbqcr',
};

const example2 = {
  word1: 'ab',
  word2: 'pqrs',
  output: 'apbqrs',
};

const example3 = {
  word1: 'abcd',
  word2: 'pq',
  output: 'apbqcd',
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(mergeAlternately(example1.word1, example1.word2)).toBe(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(mergeAlternately(example2.word1, example2.word2)).toBe(
      example2.output
    );
  });

  test('Passes example 3', () => {
    expect(mergeAlternately(example3.word1, example3.word2)).toBe(
      example3.output
    );
  });
});
