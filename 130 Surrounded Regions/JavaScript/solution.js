/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // for each found O, find all adjacent Os and save their positions
  // if none of the Os are adjacent to the border, flip all Os to X
  const region = [];

  const isSurrounded = (x, y) => {
    // if out of bounds, return false
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length)
      return false;

    // if tile is an X or * (already visited), return true
    if (board[x][y] === 'X' || board[x][y] === '*') return true;

    // if tile is an O, add x,y to region, temporarily change it to *, then check adjacent tiles
    region.push({ x, y });
    board[x][y] = '*';
    const result =
      isSurrounded(x + 1, y) &&
      isSurrounded(x - 1, y) &&
      isSurrounded(x, y + 1) &&
      isSurrounded(x, y - 1);
    board[x][y] = 'O';
    return result;
  };

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === 'O') {
        region.splice(0, region.length);
        if (isSurrounded(x, y)) {
          for (const tile of region) {
            board[tile.x][tile.y] = 'X';
          }
        }
      }
    }
  }

  return board;
};

module.exports = solve;
