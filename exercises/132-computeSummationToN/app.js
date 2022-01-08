function computeSummationToN(n) { //recursion
    // your code here
    if (n == 0) return 0;
    return n + computeSummationToN(n - 1);
}

var output = computeSummationToN(4);
console.log(output); // --> 21