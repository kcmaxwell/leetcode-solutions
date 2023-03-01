const isValid = require('./solution');

const example1Input = '()';
const example1Solution = true;

const example2Input = '()[]{}';
const example2Solution = true;

const example3Input = '(]';
const example3Solution = false;

describe('Test solution', () => {
  test('Passes examples', () => {
    expect(isValid(example1Input)).toBe(example1Solution);
    expect(isValid(example2Input)).toBe(example2Solution);
    expect(isValid(example3Input)).toBe(example3Solution);
  });

  test('Handles single open bracket', () => {
    expect(isValid('(')).toBe(false);
  });

  test('Handles single closing bracket', () => {
    expect(isValid(')')).toBe(false);
  });

  test('Can match brackets with brackets inside them', () => {
    const result = isValid('([]({}))');

    expect(result).toBe(true);
  });

  test('Returns false for hanging open bracket', () => {
    const result = isValid('(([])');

    expect(result).toBe(false);
  });

  test('Returns false for hanging closing bracket', () => {
    const result = isValid('(([])))');

    expect(result).toBe(false);
  });

  test('Returns false for bracket not being closed inside valid brackets', () => {
    const result = isValid('([)[]');

    expect(result).toBe(false);
  });
});
