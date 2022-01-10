function fromListToObject(array) {
  // your code here
  let car = {};
  array.forEach((element) => {
    car[element[0]] = element[1];
  })
  return car;
}

console.log(fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]))
// console.log(ouput) // => { make: 'Ford', model: 'Mustang', year: 1964 }