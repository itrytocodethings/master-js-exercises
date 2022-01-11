function average(...numbers) {
  // process array of numbers
  let nums = [...numbers];
  return sum(nums) / nums.length;
}

function sum(numbers) {
  let sum = numbers.reduce((sum, current) => sum += current);
  return sum;
}

console.log(average(1, 2, 3, 4, 5));