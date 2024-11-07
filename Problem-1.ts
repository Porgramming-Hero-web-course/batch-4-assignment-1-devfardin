{
  // Problem 1:
  const sumArray = (sumNumber: number[]) => {
    // return sumNumber;
    return sumNumber.reduce((sum, currentNumber) => sum + currentNumber, 0);
  };
  const result1 = sumArray([1, 2, 3, 4, 5]);
  console.log(result1);
}
