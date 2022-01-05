const getOddLengthWordsAtProperty = (obj, key) => {
    let arr = obj[key];
    if (arr.length == 0 || !arr.some((element) => element.length % 2 != 0 || !arr || !Array.isArray(arr))) {
        return [];
    }
    else {
        arr.filter((element) => element % 2 != 0);
    }
}