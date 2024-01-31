const calculator = require("./calculator.js");
test("Test addition", () => {
  const a = 5;
  const b = 2;
  expect(calculator.add(a, b)).toBe(7);
});
test("Test subtraction", () => {
  const a = 25;
  const b = 15;
  expect(calculator.subtract(a, b)).toBe(10);
});
test("Check multiplication", () => {
  const a = 20;
  const b = 100;
  expect(calculator.multiply(a, b)).toBe(2000);
});
test("Check division", () => {
  const a = 100;
  const b = 50;
  expect(calculator.divide(a, b)).toBe(2);
});
