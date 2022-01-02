function addFullNameProperty(obj) {
  obj.fullName = `${obj.firstName} ${obj.lastName}`;
  return obj;
}

let person = {
  firstName: 'Wayne',
  lastName: 'Bailey'
}

addFullNameProperty(person);
console.log(person.fullName);

