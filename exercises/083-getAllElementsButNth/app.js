const getAllElementsButNth = (array, index) => {
    array.splice(index, 1);
    return array;
}

let output = getAllElementsButNth([1, 'Wayne', 3, null, true], 3);
console.log(output);