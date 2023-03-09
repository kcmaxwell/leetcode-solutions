/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // strategy: add each temp to a stack if the temp decreases
  // if it increases,

  // initialize the answer array with 0s
  const answer = new Array(temperatures.length).fill(0);

  const stack = [];
  for (const [index, temp] of temperatures.entries()) {
    if (stack.length === 0 || stack[stack.length - 1].temp >= temp) {
      stack.push({ index, temp });
    } else {
      while (stack.length > 0 && stack[stack.length - 1].temp < temp) {
        const top = stack.pop().index;
        answer[top] = index - top;
      }
      stack.push({ index, temp });
    }
  }

  return answer;
};

module.exports = dailyTemperatures;
