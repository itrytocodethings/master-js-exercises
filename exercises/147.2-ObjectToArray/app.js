function listAllValues(obj) {
  // your code here
  let values = [];
  for (let property in obj) values.push(obj[property]);
  return values;
}

let myObj = {
  name: 'Wayne',
  age: 10000,
  favNums: [1, 2, 3],
  favcolor: 'green',
  isGreat: true
}

console.log(listAllValues(myObj));