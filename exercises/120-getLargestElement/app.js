function getLargestElement(arr) {
  // your code here
  return arr.length == 0 ? 0 : arr.reduce((largest, current) =>  {
    return largest > current ? largest : current;
  })
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;