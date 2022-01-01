function getProperty(obj, key) {
  if (!obj[key]) {
    return undefined;
  }
  else {
    return obj[key];

  }  
}

let car = {
  model: 'Toyota'
}
console.log(getProperty(car, 'Toyota'));
