const containsDuplicate = require('./solution').containsDuplicate

const exampleData1 = [1, 2, 3, 1]
const exampleData2 = [1, 2, 3, 4]
const exampleData3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

test('handles empty array', () => {
  const result = containsDuplicate([]);

  expect(result).toBe(false)
})

test('passes example data', () => {
    const result1 = containsDuplicate(exampleData1)
    const result2 = containsDuplicate(exampleData2)
    const result3 = containsDuplicate(exampleData3)

    expect(result1).toBe(true)
    expect(result2).toBe(false)
    expect(result3).toBe(true)
})