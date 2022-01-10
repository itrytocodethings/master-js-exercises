function transformFirstAndLast(array) {
  // your code here
  let myObj = {};
  myObj[array[0]] = array[array.length - 1];

  return myObj;
}