function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0 || !arr.some((element) => typeof element == 'string')) return ''
    else {
        let words = arr.filter((element) => typeof element == 'string');
        return words.reduce((smallest, current) => smallest.length <= current.length ? smallest : current);
    }
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'