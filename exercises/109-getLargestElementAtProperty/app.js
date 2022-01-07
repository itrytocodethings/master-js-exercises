var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
      return undefined;
    }
    else {
      return obj[key].reduce((largest, current) => {
        return largest > current ? largest : current;
      })
    }
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4