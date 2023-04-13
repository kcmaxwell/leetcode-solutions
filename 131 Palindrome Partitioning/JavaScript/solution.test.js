const partition = require('./solution');

const example1 = {
  s: 'aab',
  output: [
    ['a', 'a', 'b'],
    ['aa', 'b'],
  ],
};

const example2 = {
  s: 'a',
  output: [['a']],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(partition(example1.s)).toStrictEqual(example1.output);
  });
});
