/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // for each found O, find all adjacent Os and save their positions
  // if none of the Os are adjacent to the border, flip all Os to X
  const isSurrounded = (x, y) => {
    // if out of bounds, return false
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length)
      return false;

    // if tile is an X or * (already visited), return true
    if (board[x][y] === 'X' || board[x][y] === '*') return true;

    // if tile is an O, add x,y to region, temporarily change it to *, then check adjacent tiles
    board[x][y] = '*';
    const result =
      isSurrounded(x + 1, y) &&
      isSurrounded(x - 1, y) &&
      isSurrounded(x, y + 1) &&
      isSurrounded(x, y - 1);
    return result;
  };

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === 'O') {
        let replace = 'O';
        if (isSurrounded(x, y)) {
          replace = 'X';
        }
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '*') {
              board[i][j] = replace;
            }
          }
        }
      }
    }
  }

  return board;
};

module.exports = solve;
