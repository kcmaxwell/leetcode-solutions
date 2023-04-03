/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // for each found O, find all adjacent Os and save their positions
  // if none of the Os are adjacent to the border, flip all Os to X
  const regionMap = new Map();
  let region = 1;

  const isSurrounded = (x, y) => {
    // if out of bounds, return false
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length)
      return false;

    // if tile is not O, return true
    if (board[x][y] === 'X' || board[x][y] === region) return true;

    // if tile is an O, add x,y to region, temporarily change it to region number, then check adjacent tiles
    board[x][y] = region;
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
        const result = isSurrounded(x, y);
        if (result) regionMap.set(region, 'X');
        else regionMap.set(region, 'O');
        region++;
      }
    }
  }

  // for each tile that isn't X or O, check the map for which letter to choose
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== 'X' && board[i][j] !== 'O') {
        board[i][j] = regionMap.get(board[i][j]);
      }
    }
  }

  return board;
};

module.exports = solve;
