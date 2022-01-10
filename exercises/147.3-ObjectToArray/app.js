function convertObjectToList(obj) {
  // your code here
  let arrOfarrs = [];
  for (let property in obj) arrOfarrs.push([property, obj[property]]);
  return arrOfarrs;
}

let myObj = {
  name: 'Wayne',
  age: 4,
  favColor: 'black',
  theBest: true
}

console.log(convertObjectToList(myObj));