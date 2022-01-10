function detectOutlierValue(string) {
    // your code here
    let nums = string.split(' ');
    let even = [];
    let odd = [];
    let outlier;
    nums.forEach((element) => parseInt(element) % 2 == 0 ? even.push(parseInt(element)) : odd.push(parseInt(element)));
    odd = odd.join(' ');
    even = even.join(' ');
    if (odd.length == 1) outlier = odd;
    else outlier = even;
    return string.split(' ').join('').indexOf(outlier) + 1;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2