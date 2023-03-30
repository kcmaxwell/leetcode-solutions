const isScramble = require('./solution');

const examples = [
  {
    s1: 'great',
    s2: 'rgeat',
    output: true,
  },
  {
    s1: 'abcde',
    s2: 'caebd',
    output: false,
  },
  {
    s1: 'a',
    s2: 'a',
    output: true,
  },
];

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(isScramble(examples[0].s1, examples[0].s2)).toBe(examples[0].output);
  });

  test('Passes example 2', () => {
    expect(isScramble(examples[1].s1, examples[1].s2)).toBe(examples[1].output);
  });

  test('Passes example 3', () => {
    expect(isScramble(examples[2].s1, examples[2].s2)).toBe(examples[2].output);
  });
});
