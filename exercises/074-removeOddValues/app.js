function removeOddValues(obj) {
    // your code here
    for (let property in obj) {
        //if value is not even
        if (obj[property] % 2 != 0) {
            delete obj[property];
        }
    }
    return obj;
}