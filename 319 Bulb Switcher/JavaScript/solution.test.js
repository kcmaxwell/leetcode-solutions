const bulbSwitch = require('./solution');

const example1 = {
  n: 3,
  output: 1,
};

const example2 = {
  n: 0,
  output: 0,
};

const example3 = {
  n: 1,
  output: 1,
};

const largeExample = {
  n: 99999999,
  output: 9999,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(bulbSwitch(example1.n)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(bulbSwitch(example2.n)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(bulbSwitch(example3.n)).toBe(example3.output);
  });

  test('Passes large example', () => {
    expect(bulbSwitch(largeExample.n)).toBe(largeExample.output);
  });
});
