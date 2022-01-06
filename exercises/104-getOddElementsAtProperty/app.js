var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || !obj[key].some((element) => element % 2 != 0) || obj[key].length == 0) {
      return [];
    }
    else {
      return obj[key].filter((element) => element % 2 != 0);
    }
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]