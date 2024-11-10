const sum = require('./index')

// test('1 + 2 must equal 3', () => {

//     let expected = 3

//     (sum(1, 2)).toBe(expected)
// })

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });