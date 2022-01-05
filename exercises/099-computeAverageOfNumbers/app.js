const computeAverageOfNumbers = (arr) => {
    let average = arr.reduce((prev, current) => prev + current) / arr.length;
    console.log(average);
    return average;
}

computeAverageOfNumbers([1, 2, 3, 4, 5]);