const maxAreaOfIsland = require('./solution');
const example1 = {
  grid: (grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
  output: 6,
};

const example2 = {
  grid: [[0, 0, 0, 0, 0, 0, 0, 0]],
  output: 0,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(maxAreaOfIsland(example1.grid)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(maxAreaOfIsland(example2.grid)).toBe(example2.output);
  });
});
