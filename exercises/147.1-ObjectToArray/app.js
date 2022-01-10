function getAllKeys(obj) {
  // your code here
  let properties = [];
  for (let property in obj) properties.push(property);
  return properties;
}

let obj = {
  name : 'Sam',
  age : 25,
  hasPets : true
}

console.log(getAllKeys(obj));