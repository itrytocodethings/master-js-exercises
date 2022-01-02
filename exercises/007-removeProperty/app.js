function removeProperty(obj, key) {
  delete obj[key];
}

let obj = {
  name: 'Sam',
  age: 42
}

removeProperty(obj, 'name');
console.log(obj);