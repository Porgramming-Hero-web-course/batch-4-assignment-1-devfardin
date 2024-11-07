// Problem 3:

// Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// Sample Output:
// 1;

interface Counter {
  sentence: string;
  word: string;
}

const countWordOccurrences = (sentence: string, word: string): number => {
  const lowerCaseSectence = sentence.toLocaleLowerCase();
  const lowerCaseWord = word.toLocaleLowerCase();
  const sentenceInWord = lowerCaseSectence.split(" ");
  const count = sentenceInWord.filter(
    (wordCounters: string) => wordCounters == lowerCaseWord
  ).length;
  return count;
};
const result3 = countWordOccurrences("I love typescript", "typescript");

console.log(result3);
