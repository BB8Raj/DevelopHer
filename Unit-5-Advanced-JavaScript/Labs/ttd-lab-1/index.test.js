const { translate } = require("./index");

describe("What to wear", () => {
  test("", () => {
    expect(true).toBe(true);
  });
});
//vowels 1 - 5
test("Starter code - apple to applyway", () => {
  expect(translate("apple")).toBe("applyway");
});
//1
test("Words starting with different vowels - a", () => {
  expect(translate("apple")).toBe("appleway");
});

//2
test("Words starting with different vowels - e", () => {
  expect(translate("else")).toBe("elseway");
});

//3
test("Words starting with different vowels - i", () => {
  expect(translate("iron")).toBe("ironway");
});
//4
test("Words starting with different vowels - o", () => {
  expect(translate("out")).toBe("outway");
});
//5
test("Words starting with different vowels - u", () => {
  expect(translate("uber")).toBe("uberway");
});

//2 of one consonat
test("Words starting with one consonat", () => {
  expect(translate("giraffe")).toBe("iraffegay");
});

test("Words starting with one consonat", () => {
  expect(translate("buck")).toBe("uckbay");
});
//1 - 2 consonat start
test("Words starting with two consonats", () => {
  expect(translate("grace")).toBe("acegray");
});

//1 - 3 consonat start
test("Words starting with three consonats syllable", () => {
  expect(translate("syllable")).toBe("yllablesay");
});

test("Words starting with three consonats scribble", () => {
  expect(translate("scribble")).toBe("ibblescray");
});

//lowercase test
test("Uppercase conversion test", () => {
  expect(translate("BUICK")).toBe("uickbay");
});

//contractions
test("contractions: is it can't or won't", () => {
  expect(translate("can't")).toBe("an'tcay");
});
//keep case

//allow punctuation
test("punctuation: exclamation mark", () => {
  expect(translate("win!")).toBe("inway!");
});

//numbers and symbols
test("punctuation: exclamation mark", () => {
  expect(translate("hello@123mail.com")).toBe("inway!");
});
