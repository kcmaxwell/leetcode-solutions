const isAnagram = require('./solution');

const exampleData1 = {
  s: 'anagram',
  t: 'nagaram',
};

const exampleData2 = {
  s: 'rat',
  t: 'car',
};

describe('Test solution', () => {
  test('passes example data', () => {
    const result1 = isAnagram(exampleData1.s, exampleData1.t);
    const result2 = isAnagram(exampleData2.s, exampleData2.t);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });

  test('different length strings return false', () => {
    const result = isAnagram('short', 'verylongstring');

    expect(result).toBe(false);
  });
});
