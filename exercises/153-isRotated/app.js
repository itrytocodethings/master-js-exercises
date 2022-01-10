function isRotated(str1, str2) {
    // your code here
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');

    for (let i = 0; i < str1Arr.length; i++) {
        if (!str2Arr.includes(str1Arr[i])) return false;
    }
    return true;
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false