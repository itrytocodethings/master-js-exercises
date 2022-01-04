const getAverageOfElementsAtProperty = (obj, key) => {
    if (obj[key].length == 0 || !Array.isArray(obj[key]) || obj[key] == undefined) {
        return 0;
    }
    else {
        let sum = 0;
        obj[key].forEach((element) => {
            sum += element;
        })
        return sum / obj[key].length;
    }
}

let myObj = {
    name: 'Something',
    stuff: [1, 2, 3]
}

console.log(getAverageOfElementsAtProperty(myObj, 'stuff'));