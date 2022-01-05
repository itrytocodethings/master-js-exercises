const removeElement = (arr, del) => {
    if (arr.every((element) => element == del) || arr.length == 0) {
        return [];
    }
    else {
        return arr.filter((element) => element != del);
    }
}

let myArr = [1, 2, 3, 2, 1];
let allOnesRemoved = removeElement(myArr, 1);
console.log(allOnesRemoved);