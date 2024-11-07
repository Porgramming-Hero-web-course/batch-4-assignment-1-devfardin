// Problem 3:

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
