const select = (arr, obj) => {
    let newObj = {};
    for (let property in obj) {
        arr.forEach((element) => {
            if(property.toLowerCase() == element.toLowerCase()) {
                newObj[property] = obj[property];
            }
        })
    }
    return newObj;
}

let myObj = {
    firstName: 'Wayne',
    lastName: 'Bailey',
    age: 30,
    hobbies: ['coding', 'gaming', 'exercise']
}

let myArr = ['firstName', 'age', 'hobbies'];

console.log(select(myArr, myObj));
