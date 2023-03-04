/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const set = new Set();

  // check all rows
  for (let x = 0; x < 9; x++) {
    set.clear();

    for (let y = 0; y < 9; y++) {
      const num = board[x][y];
      if (num !== '.') {
        if (set.has(num)) return false;
        set.add(num);
      }
    }
  }

  // check all columns
  for (let x = 0; x < 9; x++) {
    set.clear();

    for (let y = 0; y < 9; y++) {
      const num = board[y][x];
      if (num !== '.') {
        if (set.has(num)) return false;
        set.add(num);
      }
    }
  }

  // check all 9 3x3 boxes
  for (let xBox = 0; xBox < 9; xBox += 3) {
    for (let yBox = 0; yBox < 9; yBox += 3) {
      set.clear();

      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          const num = board[xBox + x][yBox + y];
          if (num !== '.') {
            if (set.has(num)) return false;
            set.add(num);
          }
        }
      }
    }
  }

  return true;
};

module.exports = isValidSudoku;
