export const findUniqueSymbol = (text) => {
    let wordArray = text.split(" ");
    let symbols = [];
    let uniqueSymbol = null;

    for (let word of wordArray) {
      let charCount = {};

      for (let char of word) {
        let lowercaseChar = char.toLowerCase();

        if (!(lowercaseChar in charCount)) {
          charCount[lowercaseChar] = 0;
        }
        charCount[lowercaseChar] += 1;
      }

      for (let char of word) {
        let lowercaseChar = char.toLowerCase();

        if (charCount[lowercaseChar] === 1) {
            symbols.push(lowercaseChar);
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