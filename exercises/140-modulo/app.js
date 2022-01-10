function modulo(num1, num2) {
    // your code here
    let q = Math.floor((Math.abs(num1) / num2));
    num1 > 0 ? q = q * 1 : q = q * -1;
    let p = num2 * q;
    let mod = num1 - p;
    return mod;
    
}

var output = modulo(-25, 4);
console.log(output); // --> 1