function findShortestElement(arr) {
    // your code here
    return arr.length == 0 ? '' : arr.reduce((shortest, current) => shortest.length <= current.length  ? shortest : current);
}
var output = findShortestElement(['a', 'b', 'two', 'three']);
console.log(output); // --> 'a'