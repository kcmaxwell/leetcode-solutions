const exist = require('./solution');

const examples = [
  {
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    word: 'ABCCED',
    output: true,
  },
  {
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    word: 'SEE',
    output: true,
  },
  {
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    word: 'ABCB',
    output: false,
  },
];

describe('Test solution', () => {
  test('Passes example cases', () => {
    for (const example of examples) {
      expect(exist(example.board, example.word)).toBe(example.output);
    }
  });
});
