function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}

let person = {};
addProperty(person, 'name');
console.log(person.name);