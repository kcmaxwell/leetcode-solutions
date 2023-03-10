const { check } = require('prettier');
const checkInclusion = require('./solution');

const example1 = {
  s1: 'ab',
  s2: 'eidbaooo',
  output: true,
};

const example2 = {
  s1: 'ab',
  s2: 'eidboaoo',
  output: false,
};

const example3 = {
  s1: 'a',
  s2: 'ab',
  output: true,
};

const example4 = {
  s1: 'adc',
  s2: 'dcda',
  output: true,
};

const example5 = {
  s1: 'ccc',
  s2: 'cbac',
  output: false,
};

const singleChar = {
  s1: 'a',
  s2: 'a',
  output: true,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(checkInclusion(example1.s1, example1.s2)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(checkInclusion(example2.s1, example2.s2)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(checkInclusion(example3.s1, example3.s2)).toBe(example3.output);
  });

  test('Passes example 4', () => {
    expect(checkInclusion(example4.s1, example4.s2)).toBe(example4.output);
  });

  test('Passes example 5', () => {
    expect(checkInclusion(example5.s1, example5.s2)).toBe(example5.output);
  });

  test('Handles single char', () => {
    expect(checkInclusion(singleChar.s1, singleChar.s2)).toBe(
      singleChar.output
    );
  });
});
