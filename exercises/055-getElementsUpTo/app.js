function getElementsUpTo(array, n) {
  // your code here
  return array.slice(0, 3);
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']