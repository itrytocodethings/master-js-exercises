function multiplyBetween(num1, num2) {
    // your code here
    if (num2 < num1) return 0
    else {
       if (num1 == num2) return 1
       else return num1 * multiplyBetween(num1 + 1, num2);
    }
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24