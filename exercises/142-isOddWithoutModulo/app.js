function isOddWithoutModulo(num) {
    // your code here
    if (Math.floor((num / 2)) * 2 == num) return false
    else return true;
}
var output = isOddWithoutModulo(17);
console.log(output); // --> true