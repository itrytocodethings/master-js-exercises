function getLongestElement(arr) {
    // your code here
    let longest;
    if (arr.length == 0) {
        return '';
    }
    else {
        longest = arr.reduce((prev, current) => prev.length >= current.length ? prev : current);
    }
    return longest;
}
var output = getLongestElement(['one', 'two', 'three', 'foure']);
console.log(output); // --> 'three'