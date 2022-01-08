function getStringLength(string) {
    // your code here
    let length = 0;
    for (let i = 0; string.slice(i) != ""; i++) {
        length++;
    }
    return length;
}

var output = getStringLength('hello');
console.log(output); // --> 5