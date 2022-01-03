function countCharacter(str, char) {
    // your code here
    let count = 0;
    str.split('').forEach((letter) => {
        if (letter == char) {
            count++;
        }
    })
    return count;
}

let output = countCharacter('My Name is Wayne', 'a');
console.log(output);