const dailyTemperatures = require('./solution');

const example1 = {
  temperatures: [73, 74, 75, 71, 69, 72, 76, 73],
  output: [1, 1, 4, 2, 1, 1, 0, 0],
};

const example2 = {
  temperatures: [30, 40, 50, 60],
  output: [1, 1, 1, 0],
};

const example3 = {
  temperatures: [30, 60, 90],
  output: [1, 1, 0],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(dailyTemperatures(example1.temperatures)).toStrictEqual(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(dailyTemperatures(example2.temperatures)).toStrictEqual(
      example2.output
    );
  });

  test('Passes example 3', () => {
    expect(dailyTemperatures(example3.temperatures)).toStrictEqual(
      example3.output
    );
  });

  test('Temp array of length 1 outputs an array with only 0', () => {
    expect(dailyTemperatures([30])).toStrictEqual([0]);
  });
});
