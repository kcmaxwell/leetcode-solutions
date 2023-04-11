const removeStars = require('./solution');

const example1 = {
  s: 'leet**cod*e',
  output: 'lecoe',
};

const example2 = {
  s: 'erase*****',
  output: '',
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(removeStars(example1.s)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(removeStars(example2.s)).toBe(example2.output);
  });
});
