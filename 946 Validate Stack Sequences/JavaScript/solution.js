/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  // store values from pushed in set and stack until we find the next popped, then pop and remove from the set
  const stack = [];
  const set = new Set();

  let i = 0;
  for (const pop of popped) {
    while (!set.has(pop) && i < pushed.length) {
      set.add(pushed[i]);
      stack.push(pushed[i]);
      i++;
    }

    if (stack.pop() !== pop) {
      return false;
    }

    set.delete(pop);
  }

  return true;
};

module.exports = validateStackSequences;
