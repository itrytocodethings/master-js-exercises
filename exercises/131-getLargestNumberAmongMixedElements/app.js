function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0 || !arr.some((element) => typeof element == 'number')) return 0;
    let nums = arr.filter((item) => typeof item == 'number');
    return nums.reduce((largest, current) => largest > current ? largest : current);
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5