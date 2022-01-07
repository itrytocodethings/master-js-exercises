function squareElements(arr) {
  // your code here
  let squaredValues;
  squaredValues = arr.map((element) => element * element);
  return squaredValues;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]