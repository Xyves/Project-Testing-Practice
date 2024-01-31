// export default
// for (i = 97; i <= 122; i++) {
//   console.log(String.fromCharCode(i));
function Cipher(string, shift) {
  if (shift === 0) {
    return string;
  } else {
    let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    let finalString = "";
    for (let j = 0; j < string.length; j++) {
      let char = string[j];
      const x = alphabet.indexOf([char.toLowerCase()]);
      let shiftedValue = x + shift;
      let character = alphabet[shiftedValue];
      finalString += character;
    }
    console.log(finalString);
    return finalString;
  }
}
// }
module.exports = Cipher;
Cipher("testing", 2);
