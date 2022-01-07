var obj = {
  key: [ 2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    let array = obj[key];
    if(!Array.isArray(array) || !array || array.length == 0) {
      return undefined;
    }
    else {
      return array.reduce((smallest, current) => {
        return smallest < current ? smallest : current;
      })
    }
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1