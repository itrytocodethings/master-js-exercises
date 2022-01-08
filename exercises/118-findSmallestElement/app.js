function findSmallestElement(arr) {
    // your code here
    return arr.length == 0 ? 0 : arr.reduce((smallest, current) => smallest < current ? smallest : current);
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1