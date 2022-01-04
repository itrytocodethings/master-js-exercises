let myObj = {
    name: 'Wayne',
    anotherString: 'Hellloo Broooo',
    andAnother: 'Lol12345'
}


function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (let property in obj) {
        if (obj[property].length > num) {
            delete obj[property];
        }
    }
    return obj;
}

console.log(removeStringValuesLongerThan(10, myObj));


