/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // search the board for the start of the word, then check each direction for the next letter
  const search = (x, y, charIndex) => {
    // found the full word, return true
    if (charIndex >= word.length) return true;

    // return false if out of bounds
    if (x >= board.length || y >= board[0].length || x < 0 || y < 0)
      return false;

    // if the letter at x, y matches the letter in the word, return any true values from the surrounding points
    if (board[x][y] === word.at(charIndex)) {
      // edit the board temporarily to show we visited this space
      board[x][y] = '0';

      const result =
        search(x + 1, y, charIndex + 1) ||
        search(x - 1, y, charIndex + 1) ||
        search(x, y + 1, charIndex + 1) ||
        search(x, y - 1, charIndex + 1);

      board[x][y] = word.at(charIndex);

      return result;
    }
  };

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === word.at(0)) {
        if (search(x, y, 0, [])) return true;
      }
    }
  }

  return false;
};

module.exports = exist;
