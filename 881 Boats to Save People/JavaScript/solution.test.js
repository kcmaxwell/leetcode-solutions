const numRescueBoats = require('./solution');

const example1 = {
  people: [1, 2],
  limit: 3,
  output: 1,
};

const example2 = {
  people: [3, 2, 2, 1],
  limit: 3,
  output: 3,
};

const example3 = {
  people: [3, 5, 3, 4],
  limit: 5,
  output: 4,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(numRescueBoats(example1.people, example1.limit)).toBe(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(numRescueBoats(example2.people, example2.limit)).toBe(
      example2.output
    );
  });

  test('Passes example 3', () => {
    expect(numRescueBoats(example3.people, example3.limit)).toBe(
      example3.output
    );
  });
});
