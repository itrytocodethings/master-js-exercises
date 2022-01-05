const getElementsLessThan100AtProperty = (obj, key) => {
    if (!obj[key].some((element) => element < 100) || !Array.isArray(obj[key])) {
        return [];
    }
    else {
        return obj[key].filter((element) => element < 100);
    }
}

var obj = {
    key: [200, 100000, 1000]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]