const Cipher = require("./caesarCipher");
test("Test Caesar Cipher", () => {
  let string = "testing";
  expect(Cipher(string, 25)).toMatch("sdrshmf");
});
test("Test Caesar Cipher", () => {
  let string = "testing";
  expect(Cipher(string, 0)).toMatch(string);
});
