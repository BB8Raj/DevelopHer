let vowels = ["a", "e", "i", "o", "u"];
let newWord = "";

/* const consonats = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
]; */
//console.log(consonats);

function translate(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newWord = "";
  word = word.toLowerCase();

  if (vowels.indexOf(word[0]) > -1) {
    newWord = word + "way";
    return newWord;
  } else {
    let firstMatch = word.match(/[aeiouy]/g) || 0;
    let vowel = word.indexOf(firstMatch[0]);
    newWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
    return newWord;
  }
}
translate("Norway");
console.log(translate("Norway"));

module.exports = { translate };
