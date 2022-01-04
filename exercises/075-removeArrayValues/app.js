const removeArrayValues = (obj) => {
    for (let property in obj) {
        if (Array.isArray(obj[property])) {
            delete obj[property];
        }
    }
    return obj;
}

let myObj = {
    name: 'Wayne',
    favoriteStuff: [1, 'hello', 'crippling', 'depression']
}

console.log(removeArrayValues(myObj));