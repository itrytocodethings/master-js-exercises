function flipPairs(input){
    // your code here
    let chars = input.split('');
    for (let i = 0; i < chars.length; i += 2) {
        let current = chars[i];
        let next = chars[i + 1];
        chars[i] = next;
        chars[i + 1] = current;
    }
    return chars.join('')
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
