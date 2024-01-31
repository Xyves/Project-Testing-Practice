const reverseString = require("./reverseString.js");
test("Check if the function reverses string", () => {
  let sentence = "Blood";
  expect(reverseString(sentence)).toMatch(
    sentence.split("").reverse().join("")
  );
});
