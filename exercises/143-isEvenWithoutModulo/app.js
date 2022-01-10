function isEvenWithoutModulo(num) {
    // your code here
    if (Math.floor((num / 2)) * 2 == num) return true;
    else return false;
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true