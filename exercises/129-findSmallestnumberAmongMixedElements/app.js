function findSmallestNumberAmongMixedElements(arr) {
  let nums;
  if (arr.length == 0 || !arr.some((element) => typeof element == 'number')) return 0;
  nums = arr.filter((element) => typeof element == 'number')
  return nums.reduce((smallest, current) => smallest < current ? smallest : current);
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4