const summaryRanges = require('./solution');

const example1 = {
  nums: [0, 1, 2, 4, 5, 7],
  output: ['0->2', '4->5', '7'],
};

const example2 = {
  nums: [0, 2, 3, 4, 6, 8, 9],
  output: ['0', '2->4', '6', '8->9'],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(summaryRanges(example1.nums)).toStrictEqual(example1.output);
  });

  test('Passes example 2', () => {
    expect(summaryRanges(example2.nums)).toStrictEqual(example2.output);
  });
});
