function isPersonOldEnoughToDrive(person) {
  // tu codigo aqui
  return person.age >= 16;
}

let person = {
  name: 'Wayne',
  age: 30
}

console.log(isPersonOldEnoughToDrive(person));