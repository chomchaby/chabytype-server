import oneThousandMode from "../constants/one-thousand-mode.js";
import fiveThousandMode from "../constants/five-thousand-mode.js";
import tenThousandMode from "../constants/ten-thousand-mode.js";

const randomNumber = (total, n) => {
  const numbers = new Set();
  while (n > 0) {
    let i = Math.floor(Math.random() * total);
    if (numbers.has(i)) continue;
    numbers.add(i);
    n--;
  }
  return numbers;
};

export const randomWords = (mode, n) => {
  let words;
  switch (mode) {
    case "1k":
      words = oneThousandMode;
      break;
    case "5k":
      words = fiveThousandMode;
      break;
    case "10k":
      words = tenThousandMode;
      break;
    default:
      words = oneThousandMode;
  }
  const numbers = randomNumber(words.length, n);
  const result = [];
  for (let item of numbers) {
    result.push(words[item]);
  }
  return result;
};

export const languages = ["english 1k", "english 5k", "english 10k"];
