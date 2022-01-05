const getNthElementOfProperty = (obj, key, index) => {
    if (obj[key].length == 0 || index > obj[key].length - 1 || !Array.isArray(obj[key] || !obj[key])) {
        return undefined;
    }
    else {
        return obj[key][index];
    }
}