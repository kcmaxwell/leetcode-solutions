const mincostTickets = require('./solution');

const example1 = {
  days: [1, 4, 6, 7, 8, 20],
  costs: [2, 7, 15],
  output: 11,
};

const example2 = {
  days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
  costs: [2, 7, 15],
  output: 17,
};

const cheap30DayPass = {
  days: [1, 2, 3, 4, 5, 25],
  costs: [10, 10, 1],
  output: 1,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(mincostTickets(example1.days, example1.costs)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(mincostTickets(example2.days, example2.costs)).toBe(example2.output);
  });

  test('Handles 30 day pass being the cheapest', () => {
    expect(mincostTickets(cheap30DayPass.days, cheap30DayPass.costs)).toBe(
      cheap30DayPass.output
    );
  });
});
