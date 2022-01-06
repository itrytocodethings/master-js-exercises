var obj = {
  key: ['a', 'long', 'game'],
  notAnArray: 'hello'
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let array = obj[key];
    if (!Array.isArray(array) || array.length == 0 || !array.some((element) => element.length % 2 == 0) || !array) {
      return [];
    }
    else {
      return array.filter((element) => element.length % 2 == 0);
    }
}

var output = getEvenLengthWordsAtProperty(obj, 'notAnArray');
console.log(output); // --> ['long', 'game']