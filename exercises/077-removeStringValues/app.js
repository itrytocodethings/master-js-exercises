const removeStringValues = (obj) => {
    for (let property in obj) {
        if (typeof obj[property] == 'string') {
            delete obj[property];
        }
    }
    return obj;
}

let myObj = {
    name: 'Wayne',
    age: 30,
    favoriteStuff: ['pizza', 'games', 'computers']
}

console.log(removeStringValues(myObj));