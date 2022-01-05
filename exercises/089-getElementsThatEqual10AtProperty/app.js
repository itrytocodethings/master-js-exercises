const getElementsThatEqual10AtProperty = (obj, key) => {
    if (obj[key].length == 0 || !Array.isArray(obj[key]) || obj[key] == undefined || !obj[key].includes(10)) {
        return [];
    }
    else {
        return obj[key].filter((element) => element === 10);
    }
}


var obj = {
    key: [1000, 10, 50, 10]
  };
  var output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]