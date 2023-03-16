const kClosest = require('./solution');

const example1 = {
  points: [
    [1, 3],
    [-2, 2],
  ],
  k: 1,
  output: [[-2, 2]],
};

const example2 = {
  points: [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k: 2,
  output: [
    [3, 3],
    [-2, 4],
  ],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(kClosest(example1.points, example1.k)).toStrictEqual(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(kClosest(example2.points, example2.k)).toStrictEqual(
      example2.output
    );
  });
});
