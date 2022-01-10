function flipEveryNChars(input, n) {
    // your code here
    let reversed = '';
    for (let i = 0; i < input.length; i += n) {
        reversed += input.substring(i, i + n).split('').reverse('').join('')
    }
    return reversed;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma