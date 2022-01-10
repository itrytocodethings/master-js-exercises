function findPairForSum(array, number){
  let pair;

  for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == number) pair = [array[i], array[j]];
      }
  }
  return pair;
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]