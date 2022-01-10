function findShortestOfThreeWords(...words) {
    // your code here
    return words.reduce((shortest, current) => shortest.length <= current.length ? shortest : current);
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'