// Problem 3
// Sample Input:
// countWordOccurrences("I love typescript", "typescript");
// Sample Output:
// 1;

// Problem 1:

const sumArray = (sumNumber: number[]) => {
    // return sumNumber;
   return sumNumber.reduce( (sum, currentNumber)=>  sum + currentNumber,0)
}
// call function
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
