const generateParenthesis = require('./solution');

describe('Test solution', () => {
  test('can handle input of 1', () => {
    const result = generateParenthesis(1);
    expect(result).toStrictEqual(['()']);
  });

  test('can handle input of 3', () => {
    const result = generateParenthesis(3);
    expect(result.sort()).toStrictEqual(
      ['((()))', '(()())', '(())()', '()(())', '()()()'].sort()
    );
  });
});
