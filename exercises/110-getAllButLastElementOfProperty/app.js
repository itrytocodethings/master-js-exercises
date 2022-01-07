var obj = {
  key: [1, 2, 3],
  key2: []
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
      return [];
    }
    else {
      return obj[key].slice(0, obj[key].length - 1);
    }
}

var output = getAllButLastElementOfProperty(obj, 'key2');
console.log(output); // --> [1,2]