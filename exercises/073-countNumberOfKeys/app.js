function countNumberOfKeys(obj) {
    // your code here
    let keyCount = 0;
    for (let property in obj) {
        keyCount++;
    }
    return keyCount;
}