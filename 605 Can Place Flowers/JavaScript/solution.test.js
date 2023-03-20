const canPlaceFlowers = require('./solution');

const example1 = {
  flowerbed: [1, 0, 0, 0, 1],
  n: 1,
  output: true,
};

const example2 = {
  flowerbed: [1, 0, 0, 0, 1],
  n: 2,
  output: false,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(canPlaceFlowers(example1.flowerbed, example1.n)).toBe(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(canPlaceFlowers(example2.flowerbed, example2.n)).toBe(
      example2.output
    );
  });
});
