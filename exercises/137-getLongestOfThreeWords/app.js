function getLongestOfThreeWords(...words) {
    // your code here
    return words.reduce((longest, current) => longest.length >= current.length ? longest : current);
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'