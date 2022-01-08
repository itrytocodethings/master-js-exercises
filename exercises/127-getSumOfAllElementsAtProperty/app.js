var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) return 0;
    else return obj[key].reduce((sum, current) => sum + current);
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13