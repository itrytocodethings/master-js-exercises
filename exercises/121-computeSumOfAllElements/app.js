function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce((sum, current) => sum + current);
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6