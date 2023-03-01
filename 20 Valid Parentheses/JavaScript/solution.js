/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  // strategy: use a stack, add brackets to the stack
  // if a closing bracket doesn't match the top of the stack, return false
  const stack = [];

  const opening = ['(', '[', '{'];
  const closing = [')', ']', '}'];

  for (const bracket of s) {
    if (closing.includes(bracket)) {
      const stackTop = stack.pop();
      switch (stackTop) {
        case '(':
          if (bracket !== ')') return false;
          break;
        case '[':
          if (bracket !== ']') return false;
          break;
        case '{':
          if (bracket !== '}') return false;
          break;
        default:
          return false;
      }
    } else {
      stack.push(bracket);
    }
  }

  if (stack.length === 0) return true;
  return false;
};

module.exports = isValid;
