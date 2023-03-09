/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // strategy: add each temp to a stack if the temp decreases
  // if it increases, pop the stack until we find a temperature higher

  const stack = [];
  for (const [index, temp] of temperatures.entries()) {
    if (stack.length === 0 || stack[stack.length - 1].temp >= temp) {
      stack.push({ index, temp });
    } else {
      while (stack.length > 0 && stack[stack.length - 1].temp < temp) {
        const top = stack.pop().index;
        temperatures[top] = index - top;
      }
      stack.push({ index, temp });
    }
  }

  while (stack.length > 0) {
    temperatures[stack.pop().index] = 0;
  }

  return temperatures;
};

module.exports = dailyTemperatures;
