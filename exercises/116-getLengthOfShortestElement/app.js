function getLengthOfShortestElement(arr) {
    let smallest;
    // your code here
    if (arr.length == 0) {
        return 0;
    }
    else {
        smallest = arr.reduce((prev, current) => prev.length < current.length ? prev : current);
    }

    return smallest.length;
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3