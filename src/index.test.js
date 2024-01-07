import {
  capitalize,
  reverseString,
  myCalculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("Capitalize the word", () => {
  expect(capitalize("mango")).toBe("Mango");
});

test("Reverse string", () => {
  expect(reverseString("mango")).toBe("ognam");
});

test("See if myCalculator work", () => {
  expect(myCalculator.sum(9, 9)).toBe(18);
  expect(myCalculator.subtract(9, 9)).toBe(0);
  expect(myCalculator.divide(9, 3)).toBe(3);
  expect(myCalculator.multiply(9, 9)).toBe(81);
});

test("Caesar cipher a string", () => {
  expect(caesarCipher("ABC", 1)).toBe("BCD");
  expect(caesarCipher("abc", 5)).toBe("fgh");
  expect(caesarCipher("ABC", 3)).toBe("DEF");
  expect(caesarCipher("xy-", 1)).toBe("yz-");
  expect(caesarCipher("xyz", 1)).toBe("yza");
  expect(caesarCipher("XYZ", 1)).toBe("YZA");
  expect(caesarCipher("ABC", 27)).toBe("BCD");
});

test("Analyze object is correct ", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
