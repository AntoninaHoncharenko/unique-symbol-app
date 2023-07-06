export const findUniqueSymbol = (text) => {
  let wordArray = text.trim().split(" ");
  let symbols = [];
  let uniqueSymbol = null;

  for (let word of wordArray) {
    let charCount = {};

    for (let char of word) {
      if (!(char in charCount)) {
        charCount[char] = 0;
      }
      charCount[char] += 1;
    }

    for (let char of word) {
      if (charCount[char] === 1) {
          symbols.push(char);
        break;
      }
    }
  }

  for (let symbol of symbols) {
    if (!symbols.includes(symbol, symbols.indexOf(symbol) + 1)) {
      uniqueSymbol = symbol;
      break;
    }
  }

  return uniqueSymbol;
};