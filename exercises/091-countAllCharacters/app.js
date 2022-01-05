const countAllCharacters = (string) => {
    let myObj = {};
    if (!string) {
        return {};
    }
    else{
        string.split('').forEach((element) => {
            if (!myObj[element]) {
                myObj[element] = 1;
            }
            else {
                myObj[element]++;
            }
        })
        return myObj;
    }
}

var output = countAllCharacters('wayne');
console.log(output); // --> {b: 1, a: 3, n: 2}
