const getIndexOf = (char, string) => {
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() == char.toLowerCase()) {
            return i;
        }
    }
    return -1;
}

console.log(getIndexOf('a', 'wayne'));