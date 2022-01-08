function sumDigits(num) {
    // your code here
    let sum = 0;
    let nums = num.toString().split('');
    if(nums[0] == '-') {
        let firstNum = nums[1];
        nums.splice(0, 2, `-${firstNum}`); 
    }
    nums.forEach((num) => sum += Number(num));
    return sum;
}
var output = sumDigits(-316);
console.log(output); // --> 4