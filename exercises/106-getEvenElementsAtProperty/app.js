
var obj = {
  key: [1000, 11, 50, 17]
};

const getEvenElementsAtProperty = (obj, key) => {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0 || !obj[key].some((number) => number % 2 == 0)) {
    return [];
  }
  else {
    return obj[key].filter((element) => element % 2 == 0);
  }
}

var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]