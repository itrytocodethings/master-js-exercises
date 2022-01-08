function getLongestWordOfMixedElements(arr) {
    // your code here
    if(arr.length == 0 || !arr.some((element) => typeof element == 'string')) return "";
    let words = arr.filter((element) => typeof element == 'string')
    return words.reduce((longest, current) => longest >= current ? longest : current);
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'