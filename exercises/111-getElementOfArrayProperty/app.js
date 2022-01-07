var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0 || obj[key][index] > obj[key].length - 1) {
        return undefined
    }
    else {
        return obj[key][index];
    }
}