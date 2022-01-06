const getAverageOfElementsAtProperty = (obj, key) => {
  let myArray = obj[key];
  if (myArray == 0 || !Array.isArray(myArray) || !myArray) {
    return 0;
  }
  else {
    let sum = myArray.reduce((prev, current) => prev + current);
    return sum / myArray.length;
  }
}