function joinArrayOfArrays(arr) {
  // your code here
  let newArr = [];
  arr.forEach((element) => {
    newArr = newArr.concat(element);
  })
  return newArr;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']