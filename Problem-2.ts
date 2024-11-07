{
  // Problem 2:

  const removeDuplicates = (numbers: number[]): number[] => {
    return numbers.filter((number, index) => numbers.indexOf(number) === index);
  };
  const result2 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

  console.log(result2);
}
