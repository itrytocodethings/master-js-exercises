function getLengthOfLongestElement(arr) {
    // your code here
    return arr.length == 0 ? 0 : arr.reduce((prev, current) => prev.length > current.length ? prev.length : current.length);
}

var output = getLengthOfLongestElement(['biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiig', 'one', 'two', 'three', 'biiiigwoooord']);
console.log(output); // --> 5