const MinStack = require('./solution');

const exampleInput = describe('Test solution', () => {
  test('can see the top element with top', () => {
    const minStack = new MinStack();
    minStack.push(0);
    minStack.push(1);
    minStack.push(2);

    expect(minStack.top()).toBe(2);
  });

  test('can remove the top element with pop', () => {
    const minStack = new MinStack();
    minStack.push(0);
    minStack.push(5);
    minStack.push(-3);
    minStack.pop();

    expect(minStack.top()).toBe(5);
  });

  test('can get the minimum value with getMin', () => {
    const minStack = new MinStack();
    minStack.push(-5);
    minStack.push(0);
    minStack.push(-10);
    minStack.push(15);

    expect(minStack.getMin()).toBe(-10);
  });

  test('getMin returns minimum after pop', () => {
    const minStack = new MinStack();
    minStack.push(-5);
    minStack.push(0);
    minStack.push(-10);

    expect(minStack.getMin()).toBe(-10);

    minStack.pop();
    expect(minStack.getMin()).toBe(-5);
  });
});
