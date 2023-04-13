const validateStackSequences = require('./solution');

const example1 = {
  pushed: [1, 2, 3, 4, 5],
  popped: [4, 5, 3, 2, 1],
  output: true,
};

const example2 = {
  pushed: [1, 2, 3, 4, 5],
  popped: [4, 3, 5, 1, 2],
  output: false,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(validateStackSequences(example1.pushed, example1.popped)).toBe(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(validateStackSequences(example2.pushed, example2.popped)).toBe(
      example2.output
    );
  });
});
