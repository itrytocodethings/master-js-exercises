function computeProductOfAllElements(arr) {
    // your code here
    return arr.length == 0 ? 0 : arr.reduce((prev, current) => prev * current);
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60