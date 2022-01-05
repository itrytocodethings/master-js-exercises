const getElementsGreaterThan10AtProperty = (obj, key) => {
    if (!obj[key] || obj[key].length == 0 || !obj[key].some((element) => element > 10) || !Array.isArray(obj[key])) {
        return [];
    }
    else {
        return obj[key].filter((element) => element > 10);
    }
}

var obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]