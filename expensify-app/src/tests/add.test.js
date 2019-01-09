const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(5, 6);

  // if (result !== 11) {
  //   throw new Error(`Expected ${5 + 6} but got ${result}`);
  // }

  expect(result).toBe(11);
});
